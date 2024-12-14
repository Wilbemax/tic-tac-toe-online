'use client'

import { Button } from "@/shared/ui/button"

export default function AuthSubmitButton({ children, isPending }: {
    children: React.ReactNode,
    isPending?: boolean
}) {
    return (
        <Button type="submit" className="w-full" disabled={isPending}>{children}</Button>
    )
}

