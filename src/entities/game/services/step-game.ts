import { right } from "../../../shared/lib/either";
import { GameId } from "@/kernel/ids";
import { doStep, PlayerEntity } from "../domain";
import { gameRepositories } from "../repositories/game";
import { left } from "@/shared/lib/either";

export async function stepGame(
  gameId: GameId,
  player: PlayerEntity,
  index: number,
) {
  const game = await gameRepositories.getGame({ id: gameId });

  if (!game) {
    return left("game-nit-found" as const);
  }

  if (game.status !== "inProgress") {
    return left("game-status-not-in-progress" as const);
  }

  if (!game.players.some((p) => p.id === player.id)) {
    return left("player-is-not-in-game" as const);
  }
  const opponent = game.players.find((p) => p.id !== player.id);
  if (!opponent) {
    return left("opponent-not-found" as const);
  }

  const stepResult = doStep(game, player, index);

  if (stepResult.type === "left") {
    return stepResult;
  }

  return right(await gameRepositories.saveGame(stepResult.value));
}
