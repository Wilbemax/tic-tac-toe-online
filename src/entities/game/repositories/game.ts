import { GameIdleEntity, PlayerEntity } from "./../domain";
import { GameEntity, GameOverEntity } from "../domain";
import { z } from "zod";
import { Game, User, Prisma, GamePlayer } from "@prisma/client";
import { prisma } from "@/shared/lib/db";
import { GameId } from "@/kernel/ids";

const whereIncludes = {
  winner: { include: { user: true } },
  players: { include: { user: true } },
};

async function gameList(where?: Prisma.GameWhereInput): Promise<GameEntity[]> {
  const games = await prisma.game.findMany({
    where,
    include: whereIncludes,
  });

  return games.map(dbGameToGameEntity);
}

async function startGame(gameId: GameId, player: PlayerEntity) {
  return dbGameToGameEntity(
    await prisma.game.update({
      where: {
        id: gameId,
      },
      data: {
        players: {
          create: {
            userId: player.id,
            index: 1,
          },
        },
        status: "inProgress",
      },
      include: whereIncludes,
    }),
  );
}

async function getGame(where?: Prisma.GameWhereInput) {
  const game = await prisma.game.findFirst({
    where,
    include: whereIncludes,
  });

  if (game) {
    return dbGameToGameEntity(game);
  }

  return undefined;
}

async function createGame(game: GameIdleEntity): Promise<GameEntity> {
  const createdGame = await prisma.game.create({
    data: {
      status: game.status,
      id: game.id,
      field: game.field,
      players: {
        create: {
          index: 0,
          userId: game.creator.id,
        },
      },
    },
    include: whereIncludes,
  });
  return dbGameToGameEntity(createdGame);
}

const fieldSchema = z.array(z.union([z.string(), z.null()]));

function dbGameToGameEntity(
  game: Game & {
    players: Array<GamePlayer & { user: User }>;
    winner?: (GamePlayer & { user: User }) | null;
  },
): GameEntity {
  const players = game.players
    .sort((a, b) => a.index - b.index)
    .map(dbPlayerToPlayer);
  switch (game.status) {
    case "idle":
      const [creator] = players;

      if (!creator) {
        throw new Error("Creator must be in game idle");
      }
      return {
        id: game.id,
        creator: creator,
        status: game.status,
        field: fieldSchema.parse(game.field),
      } satisfies GameIdleEntity;
    case "inProgress":
    case "gameOverDraw": {
      return {
        id: game.id,
        players: players,
        status: game.status,
        field: fieldSchema.parse(game.field),
      };
    }

    case "gameOver": {
      if (!game.winner) {
        throw new Error("Winner must be in game over");
      }
      return {
        id: game.id,
        players: players,
        status: game.status,
        winner: dbPlayerToPlayer(game.winner),

        field: fieldSchema.parse(game.field),
      } satisfies GameOverEntity;
    }
  }
}

export const dbPlayerToPlayer = (
  db: GamePlayer & { user: User },
): PlayerEntity => {
  return {
    id: db.user.id,
    login: db.user.login,
    rating: db.user.rating,
    name: db.user.name,
  };
};

export const gameRepositories = { gameList, createGame, getGame, startGame };
