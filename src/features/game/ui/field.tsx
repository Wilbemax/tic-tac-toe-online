"use client"
import { GameDomain } from "@/entities/game";

export const GameField = ({ game, onCellClick }: { game: GameDomain.GameEntity, onCellClick?: (index: number) => void }) => {
    return <div className="grid grid-cols-3">
        {game.field.map((s, i) => (<button className="border border-primary w-10 h-10 flex justify-center items-center" key={i} onClick={() => onCellClick && onCellClick(i)}>{s ?? ""}</button>))}
    </div>
}