import { getIdleGames } from "@/entities/game/server";
import { GameCard } from "../ui/game-card";
import { Layout } from "../ui/layout";
import { CreateButton } from "./create-button";

export async function GameList() {
    const games = await getIdleGames()

    return (
        <Layout actions={<CreateButton />}>
            {games.map(game => <GameCard key={game.id} id={game.id} login={game.creator.login} rating={game.creator.rating} />)}
        </Layout>


    )
}