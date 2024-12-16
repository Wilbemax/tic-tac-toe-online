
import React from 'react'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/shared/ui/card"

export function AuthFormLayout({ title, description, baseInputs, signUpInput, submitButton, footer, action, errorAlert }: {
    title: string,
    description: string,
    baseInputs: React.ReactNode,
    signUpInput?: React.ReactNode,
    submitButton: React.ReactNode,
    footer: React.ReactNode
    errorAlert: React.ReactNode
    action: (formData: FormData) => void
}) {

    return (
        <>
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <form action={action} className="space-y-4">
                        {signUpInput && signUpInput}
                        {baseInputs}
                        {errorAlert}
                        {submitButton}
                    </form>
                </CardContent>
                <CardFooter className="flex justify-center">
                    {footer}
                </CardFooter>
            </Card>

        </>
    )
}

