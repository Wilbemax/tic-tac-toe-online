'use client'

import { Button } from "@/shared/ui/button"

export default function AuthSubmitButton({ children }: {
    children: React.ReactNode,
}) {
    return (
        <Button type="submit" className="w-full">{children}</Button>
    )
}

