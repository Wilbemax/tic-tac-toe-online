'use client'

import { Alert, AlertDescription } from "@/shared/ui/alert"
import { Either, matchEither } from '@/shared/lib/either'

export default function AuthAlert({ error }: { error: Either<string, unknown> }) {
    return matchEither(error, {
        left: (error) => (
            <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
            </Alert>
        ),
        right: () => null
    })
}

