'use client'
import { useActionState } from "@/shared/lib/react";
import { Button } from "@/shared/ui/button";
import { createGameAction } from "../actions/create-game";
import { matchEither, right } from "@/shared/lib/either";
import { Alert, AlertDescription, AlertTitle } from "@/shared/ui/alert";
import { CircleAlert, } from "lucide-react";
import { startTransition, useEffect, useState } from "react";

export function CreateButton() {
    const [data, dispatch, isPending] = useActionState(
        createGameAction,
        right(undefined)
    )
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        matchEither(data, {
            right: () => null,
            left: (e) => ({
                ["User not found"]: setError("Пользователь не найден"),
                ["can-create-only-one-game"]: setError("Вы можете создать только одну игру")
            })[e]
        })
    }, [data])

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (error) {
            timer = setTimeout(() => {
                setError(null);
            }, 3500);
        }

        return () => clearTimeout(timer);
    }, [error]);

    return (
        <>
            <div className="flex flex-col gap-1">
                <Button disabled={isPending} onClick={() => startTransition(dispatch)}>Создать игру</Button>
            </div>
            {
                error && (
                    <Alert variant={"destructive"} className="absolute bottom-8 left-8 max-w-[450px]">
                        <CircleAlert className="h-4 w-4" />
                        <AlertTitle>Ошибка!</AlertTitle>
                        <AlertDescription>
                            {error}
                        </AlertDescription>
                    </Alert>
                )
            }
        </>
    )
}