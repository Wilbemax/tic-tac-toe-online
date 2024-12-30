import { GameDomain } from "@/entities/game";

export const GameStatus = ({ game }: { game: GameDomain.GameEntity }) => {
    if (game.status === "gameOver" && game.winner) {
        console.log(game.winner)
    }

    switch (game.status) {
        case "idle":
            return <div className="text-lg">Ожидание игроков</div>
        case "inProgress": {

            return <div className="text-lg">Ход: {GameDomain.getGameCurrentSymbol(game)}</div>
        }
        case "gameOver": {

            return <div className="text-lg">Победитель: {game.winner.name}</div>
        }
        case "gameOverDraw":
            return <div className="text-lg">Ничья</div>
        default:
            return <div className="text-lg">Неизвестный статус</div>
    }
}