import { GameId } from "@/kernel/ids";
import { PlayerEntity } from "../domain";
import { gameRepositories } from "../repositories/game";
import { left } from "@/shared/lib/either";


export async function startGame(gameId: GameId, player: PlayerEntity) { 
    const game = await gameRepositories.getGame({id: gameId})


    if(!game) {
        return left("game-nit-found" as const)
    }

    if (game.status !== 'idle') {
        return left("game-status-not-idle" as const)
    }

    if(game.creator.id === player.id){
        return left("creator-can-not-start-game" as const)
    }

    

    gameRepositories.startGame(gameId, player)
}