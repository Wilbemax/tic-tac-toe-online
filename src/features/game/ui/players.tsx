import { GameDomain } from "@/entities/game";

export const GamePlayers = ({ game }: { game: GameDomain.GameEntity }) => {
    const firstPlayer = game.status === "idle" ? game.creator : game.players[0]
    const secondePlayer = game.status === "idle" ? undefined : game.players[1]

    return (
        <div className="flex flex-row gap-4 justify-between">
            <div>
                <div className="text-lg">X - {firstPlayer.name}</div>
                <div className="text-sm font-semibold text-gray-600">Рейтинг: {firstPlayer.rating}</div>
            </div>

            <div>
                <div className="text-lg">O - {secondePlayer ? secondePlayer.name : "Ожидание"} </div>
                <div className="text-sm font-semibold text-gray-600">Рейтинг: {secondePlayer && secondePlayer.rating}</div>

            </div>
        </div>
    )
}