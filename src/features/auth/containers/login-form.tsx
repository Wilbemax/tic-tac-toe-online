'use client'

import { AuthFormLayout } from '../ui/auth-form-layout'
import MainFields from '../ui/main-fields'
import AuthSubmitButton from '../ui/submit-button'
import AuthAlert from '../ui/auth-alert'
import { right } from '@/shared/lib/either'
import LoginFooter from '../ui/login-footer'
import { useActionState } from '@/shared/lib/react'
import { loginAction } from '../actions/login'

export default function LoginForm() {
       const [formState, action, isPending] = useActionState(loginAction, right(undefined))
   
    return (

        <AuthFormLayout
            title='Login'
            description='Welcome back! Please login to your account'
            action={action}
            baseInputs={
                <MainFields
                    nameField={false}

                />}
            submitButton={<AuthSubmitButton isPending={isPending}>Login</AuthSubmitButton>}
            footer={<LoginFooter />}
            errorAlert={<AuthAlert error={formState} />}

        />

    )
}


