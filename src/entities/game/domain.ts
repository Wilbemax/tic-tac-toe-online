import { GameId } from "@/kernel/ids";

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

export const getNextSymbol = (sameSymbol: GameSymbol) => {
  if (sameSymbol === GameSymbol.X) return GameSymbol.O;

  return GameSymbol.X;
};
