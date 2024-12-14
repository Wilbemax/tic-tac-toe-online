'use server'

import { sessionService, userService } from "@/entities/user/server"
import { left, mapLeft } from "@/shared/lib/either"
import { redirect } from "next/navigation"
import { z } from "zod"

const formDataSchema = z.object({
    email: z.string().email().min(3),
    password: z.string().min(3),
})


export const signUpAction = async (state: unknown, formData: FormData) => {


    const data = Object.fromEntries(formData.entries())

    const result = formDataSchema.safeParse(data)

    if (!result.success) {
        return left("ValidationError" as const)
    }

    const createUserResult = await userService.createUser(result.data)

    if (createUserResult.type === 'right') {
       await sessionService.addSession(createUserResult.value)

       redirect('/')

    }


    return mapLeft(createUserResult, (error) => {
        return {
            "user-already-exist": "Пользователь с такой почтой уже существует",
        }[error]
    })
}