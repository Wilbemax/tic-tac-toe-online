import { GameDomain } from "@/entities/game"
import { GameId } from "@/kernel/ids"
import { useEventsSource } from "@/shared/lib/sse/client"
import { useOptimistic, useTransition } from "react"
import { doStepAction } from "../actions/do-setp-action"

export const useGame = (gameId: GameId, player: GameDomain.PlayerEntity) => {
    const { isPending, dataStream } = useEventsSource<GameDomain.GameEntity>(`/game/${gameId}/stream`)


    const [isPendingTransition, startTransition] = useTransition()


    const [optimisticGame, dispatchOptimistic] = useOptimistic(dataStream, (game, index: number) => {
        if (!game || game.status !== "inProgress") return game
        const result = GameDomain.doStep(game, player, index)
        if (result.type === "left") return game
        return result.value
    })





    const step = (index: number) => {
        startTransition(async () => {
            dispatchOptimistic(index)
            await doStepAction({ gameId, index })
        })

    }


    return {
        game: optimisticGame,
        step,
        isPending,
        isStepPending: isPendingTransition
    }
}