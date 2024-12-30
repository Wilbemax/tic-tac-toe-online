import { GameDomain } from "@/entities/game";
import { GameId } from "@/kernel/ids";
import { EventsChanel } from "@/shared/lib/events";

type GameEvent = {
  type: "game-changed";
  data: GameDomain.GameEntity;
};

type Listener = (game: GameEvent) => void;

class GameEventsServices {
  events = new EventsChanel("game");

  addListener(gameId: GameId, listener: Listener) {
    return this.events.concume(gameId, (data) => {
      listener(data as GameEvent);
    });
  }

  emit(game: GameDomain.GameEntity) {
    return this.events.emit(game.id, {
      type: "game-changed",
      data: game,
    } satisfies GameEvent);
  }
}

export const gameEvents = new GameEventsServices();
