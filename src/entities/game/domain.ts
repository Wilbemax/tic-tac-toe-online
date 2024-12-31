import { GameId } from "@/kernel/ids";
import { left, right } from "@/shared/lib/either";

export type GameEntity =
  | GameIdleEntity
  | GameInProgressEntity
  | GameOverEntity
  | GameOverDrawEntity;

export type GameIdleEntity = {
  id: GameId;
  creator: PlayerEntity;
  status: "idle";
  field: Field;
};

export type GameInProgressEntity = {
  id: GameId;
  players: PlayerEntity[];
  field: Field;
  status: "inProgress";
};

export type GameOverEntity = {
  id: GameId;
  players: PlayerEntity[];
  field: Field;
  winner: PlayerEntity;
  status: "gameOver";
};
export type GameOverDrawEntity = {
  id: GameId;
  players: PlayerEntity[];
  field: Field;
  status: "gameOverDraw";
};

export type PlayerEntity = {
  id: GameId;
  name: string;
  login: string;
  rating: number;
};

export type Field = Cell[];

export type Cell = GameSymbol | null;
export type GameSymbol = string;

export const GameSymbol = {
  X: "X",
  O: "O",
};

export const getGameCurrentSymbol = (
  game: GameInProgressEntity | GameOverEntity,
) => {
  const symbols = game.field.filter((s) => s !== null).length;
  return symbols % 2 === 0 ? GameSymbol.X : GameSymbol.O;
};



export const getPlayerSymbol = (
  player: PlayerEntity,
  game: GameInProgressEntity,
) => {
  const index = game.players.findIndex((p) => p.id === player.id);
  if (index === -1) {
    throw new Error("Player not found in the game");
  }
  return { 0: GameSymbol.X, 1: GameSymbol.O }[index];
};

export const doStep = (
  game: GameInProgressEntity,
  player: PlayerEntity,
  index: number,
) => {
  const currentSymbol = getGameCurrentSymbol(game);
  console.log(currentSymbol);


  if (currentSymbol !== getPlayerSymbol(player, game)) {
    return left("not-player-symbol" as const);
  }
  

  if (game.field[index]) {
    return left("game-cell-already-has-symbol" as const);
  }

  const newField = game.field.map((cell, i) =>
    i === index ? currentSymbol : cell,
  );

  if (calculateWinner(newField)) {
    return right({
      ...game,
      field: newField,
      winner: player,
      status: "gameOver",
    } satisfies GameOverEntity);
  }

  if (isDraw(newField)) {
    return right({
      ...game,
      field: newField,
      status: "gameOverDraw",
    } satisfies GameOverDrawEntity);
  }

  return right({
    ...game,
    field: newField,
  });
};

function calculateWinner(squares: Field) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function isDraw(squares: Field) {
  const winner = calculateWinner(squares);

  if (!winner) return squares.every((s) => s !== null);

  return false;
}
