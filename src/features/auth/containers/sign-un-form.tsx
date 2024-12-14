'use client'

import { AuthFormLayout } from '../ui/auth-form-layout'
import MainFields from '../ui/main-fields'
import AuthSubmitButton from '../ui/submit-button'
import AuthAlert from '../ui/auth-alert'
import { mapLeft, right } from '@/shared/lib/either'
import SignUpFooter from '../ui/sign-up-footer'
import { useActionState } from '@/shared/lib/react'
import { signUpAction } from '../actions/sign-up'

export default function SignUpForm() {
    const [formState, action, isPending] = useActionState(signUpAction, right(undefined))



   return (

        <AuthFormLayout
            title='Sign Up'
            description='Create a new account to get started'
            baseInputs={
                <MainFields
                    nameField={true}
                />}
            submitButton={
                <AuthSubmitButton isPending={isPending}>Sign up</AuthSubmitButton>}
            footer={<SignUpFooter />}
            errorAlert={<AuthAlert error={formState} />}
            action={action}
        />

    )
}


