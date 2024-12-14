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
  login: string;
  rating: number;
};

export type Field = Cell[];

export type Cell = GameSymbol | null;
export type GameSymbol = string;
