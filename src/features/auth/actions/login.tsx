'use server'

import { sessionService, verifyUser } from "@/entities/user/server"
import { left, mapLeft } from "@/shared/lib/either"
import { redirect } from "next/navigation"
import { z } from "zod"

const formDataSchema = z.object({
    email: z.string().email().min(3),
    password: z.string().min(3),
})


export const loginAction = async (state: unknown, formData: FormData) => {
    const data = Object.fromEntries(formData.entries())
    const result = formDataSchema.safeParse(data)

    if (!result.success) {
        return left("ValidationError" as const)
    }

    const verifyUserResult = await verifyUser(result.data)

    if (verifyUserResult.type === 'right') {
       await sessionService.addSession(verifyUserResult.value)

       redirect('/')

    }


    return mapLeft(verifyUserResult, (error) => {
        return {
            "login-or-password-incorrect": "Неправильный логин или пароль",
        }[error]
    })
}