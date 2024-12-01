import { prisma } from "@/shared/lib/db";
import { Button } from "@/shared/ui/button";

export default async function Home() {
  const games = await prisma.game.findMany();
  console.log(games);

  return (
    <div>
      <Button size={"lg"} variant={"outline"}>
        {" "}
        GG
      </Button>

      {games.map((game) => (
        <p key={game.id}>{game.name}</p>
      ))}
    </div>
  );
}
