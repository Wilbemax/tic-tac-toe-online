'use client'
import { GameLayout } from "../ui/layout";
import { GamePlayers } from "../ui/players";
import { GameId } from "@/kernel/ids";
import { GameStatus } from "../ui/status";
import { GameField } from "../ui/field";
import { useGame } from "../model/use-game";

export function Game({ gameId }: { gameId: GameId }) {

    const { game, isPending } = useGame(gameId)

    if (!game || isPending) return  <GameLayout status={"Загрузка"} />


    return <GameLayout players={<GamePlayers game={game} />} status={<GameStatus game={game} />} field={<GameField game={game} />} />
}