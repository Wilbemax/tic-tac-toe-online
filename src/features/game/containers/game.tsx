import { GameEntity } from "@/entities/game";
import { GameLayout } from "../ui/layout";
import { GamePlayers } from "../ui/players";
import { GameId } from "@/kernel/ids";
import { GameStatus } from "../ui/status";

export function Game({ gameId }: { gameId: GameId }) {

    const game: GameEntity = {
        id: '1',
        creator: {
            id: '1',
            login: 'login1',
            rating: 1000,
        },
        status: "idle"
    }
    return <GameLayout players={<GamePlayers game={game} />} status={<GameStatus game={game}/>}/>
}