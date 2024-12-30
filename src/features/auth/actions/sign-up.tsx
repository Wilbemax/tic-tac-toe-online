'use server'

import { sessionService, userService, } from "@/entities/user/server"
import { redirect } from "next/navigation"
import { z } from "zod"


export type SignInFormState = {
    formData?: FormData,
    errors?: {
        email?: string,
        password?: string,
        _error?: string
    }
}

const formDataSchema = z.object({
    name: z.string().min(3),
    email: z.string().email().min(3),
    password: z.string().min(3),
})


export const signUpAction = async (state: SignInFormState, formData: FormData): Promise<SignInFormState> => {


    const data = Object.fromEntries(formData.entries())

    const result = formDataSchema.safeParse(data)

    if (!result.success) {
        const formattedErrors = result.error.format()
        return {
            formData,
            errors :{
                email: formattedErrors.email?._errors.join(", "),
                password: formattedErrors.password?._errors.join(", "),
                _error: formattedErrors._errors.join(", ")
            }
        }
    }

    const createUserResult = await userService.createUser(result.data)

    if (createUserResult.type === 'right') {
       await sessionService.addSession(createUserResult.value)

       redirect('/')

    }

    const errors =  {
        "user-already-exist": "Пользователь уже существует",
    }[createUserResult.error]

    return {
        formData,
        errors :{
            _error: errors
        }
    }
}