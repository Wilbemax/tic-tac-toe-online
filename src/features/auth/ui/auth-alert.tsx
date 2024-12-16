'use client'

import { Alert, AlertDescription } from "@/shared/ui/alert"

export default function AuthAlert({ error }: { error?: string }) {
    return error && (
        <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
        </Alert>
    )
}

