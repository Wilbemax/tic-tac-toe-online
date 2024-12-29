import { getGameById } from "@/entities/game/server";
import { GameId } from "@/kernel/ids";
import { sseStream } from "@/shared/lib/sse/server";
import { NextRequest } from "next/server";


export const getGameStream = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: GameId }> },
) => {
  const { id } = await params;

  const game = await getGameById(id);

  if (!game) {
    return new Response(`Game not found`, {
      status: 404,
    });
  }

  const { handleClose, response, write } = sseStream(req);

  write(game);

  handleClose(() => {});

  return response;
};
