import { getGameById, surrenderGame } from "@/entities/game/server";
import { GameId } from "@/kernel/ids";
import { sseStream } from "@/shared/lib/sse/server";
import { NextRequest } from "next/server";
import { gameEvents } from "../services/game-events";
import { getCurrentUser } from "@/entities/user/server";

export const getGameStream = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: GameId }> },
) => {
  const { id } = await params;
  const user = await getCurrentUser();
  const game = await getGameById(id);

  if (!game || !user) {
    return new Response(`Game not found`, {
      status: 404,
    });
  }

  const { handleClose, response, write } = sseStream(req);

  write(game);

  const unwatch = await gameEvents.addListener(game.id, (event) => {
    write(event.data);
  });

  handleClose(async () => {
    unwatch();

    const res = await surrenderGame(id, user);


    if (res.type === 'right') {
      gameEvents.emit(res.value)
    }
  });

  return response;
};
