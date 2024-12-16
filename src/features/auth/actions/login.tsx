'use server'

import { sessionService, verifyUser } from "@/entities/user/server"
import { redirect } from "next/navigation"
import { z } from "zod"



export type LoginInFormState = {
    formData?: FormData,
    errors?: {
        email?: string,
        password?: string,
        _error?: string
    }
}

const formDataSchema = z.object({
    email: z.string().email().min(3),
    password: z.string().min(3),
})


export const loginAction = async (state: LoginInFormState, formData: FormData): Promise<LoginInFormState> => {
    const data = Object.fromEntries(formData.entries())
    const result = formDataSchema.safeParse(data)

    if (!result.success) {
        const formattedErrors = result.error.format()
        return {
            formData,
            errors: {
                email: formattedErrors.email?._errors.join(", "),
                password: formattedErrors.password?._errors.join(", "),
                _error: formattedErrors._errors.join(", ")
            }
        }
    }

    const verifyUserResult = await verifyUser(result.data)

    if (verifyUserResult.type === 'right') {
        await sessionService.addSession(verifyUserResult.value)

        redirect('/')

    }


    const errors = {
        "login-or-password-incorrect": "Неверный почта или пароль",
    }[verifyUserResult.error]

    return {
        formData,
        errors: {
            _error: errors
        }
    }
}