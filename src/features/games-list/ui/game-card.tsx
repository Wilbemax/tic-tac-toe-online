"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import Link from "next/link";

export function GameCard({ id, login, rating }: { id: string, login: string, rating: number }) {

    return (
        <Link href={`/game/${id}`}>
            <Card >
                <CardHeader >
                    <CardTitle>Игра с  {login} </CardTitle>
                </CardHeader>
                <CardContent>Рейтинг: {rating}</CardContent>
            </Card>
        </Link>

    )
}