
import React from 'react'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/shared/ui/card"

export function AuthFormLayout({ title, description, baseInputs, signUpInput, submitButton, footer, onSubmit, errorAlert }: {
    title: string,
    description: string,
    baseInputs: React.ReactNode,
    signUpInput?: React.ReactNode,
    submitButton: React.ReactNode,
    footer: React.ReactNode
    errorAlert: React.ReactNode
    onSubmit?: React.FormEventHandler<HTMLFormElement>
}) {

    return (
        <>
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={onSubmit} className="space-y-4">
                        {signUpInput && signUpInput}
                        {baseInputs}

                        {submitButton}
                    </form>
                </CardContent>
                <CardFooter className="flex justify-center">
                    {footer}
                </CardFooter>
            </Card>
            {errorAlert}
        </>
    )
}

