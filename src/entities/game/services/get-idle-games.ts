import { GameIdleEntity } from "../domain";
import { gameRepositories } from "../repositories/game";

export async function getIdleGames(): Promise<GameIdleEntity[]> {
  const games = await gameRepositories.gameList({
    status: "idle",
  });
  return games as GameIdleEntity[];
}
