'use client'
import { GameLayout } from "../ui/layout";
import { GamePlayers } from "../ui/players";
import { GameStatus } from "../ui/status";
import { GameField } from "../ui/field";
import { useGame } from "../model/use-game";
import { GameDomain } from "@/entities/game";

export function GameClient({ defaultGame, player }: { defaultGame: GameDomain.GameEntity, player: GameDomain.PlayerEntity }) {

    const { game, isPending, step } = useGame(defaultGame.id, player)

    if (!game || isPending) return <GameLayout status={"Загрузка"} />


    return <GameLayout players={<GamePlayers game={game} />} status={<GameStatus game={game} />} field={<GameField game={game} onCellClick={step} />} />
}