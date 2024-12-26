import { GameId } from "@/kernel/ids";
import { gameRepositories } from "../repositories/game";

export const getGameById = (gameId: GameId) => {
    return gameRepositories.getGame({id: gameId})
}