import { GameDomain } from "@/entities/game"
import { GameId } from "@/kernel/ids"
import { useEventsSource } from "@/shared/lib/sse/client"
import { useTransition } from "react"
import { doStepAction } from "../actions/do-setp-action"

export const useGame = (gameId: GameId) => {
    const { isPending, dataStream } = useEventsSource<GameDomain.GameEntity>(`/game/${gameId}/stream`)


    const [isPendingTransition, startTransition] = useTransition()

    const step = (index: number) => {
        startTransition(async () => {
            await doStepAction({ gameId, index })
        })

    }


    return {
        game: dataStream,
        step,
        isPending,
        isStepPending: isPendingTransition
    }
}