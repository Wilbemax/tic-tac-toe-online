'use client'

import { useState } from 'react'
import { AuthFormLayout } from '../ui/auth-form-layout'
import MainFields from '../ui/main-fields'
import AuthSubmitButton from '../ui/submit-button'
import AuthAlert from '../ui/auth-alert'
import { right } from '@/shared/lib/either'
import SignUpFooter from '../ui/sign-up-footer'

export default function SignUpForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = async () => {

    }

    return (

        <AuthFormLayout
            title='Sign Up'
            description='Create a new account to get started'
            onSubmit={handleSubmit}
            baseInputs={
                <MainFields
                    nameField={true}
                    name={name}
                    email={email}
                    password={password}
                    setEmail={setEmail}
                    setPassword={setPassword}
                    setName={setName}
                />}
            submitButton={
            <AuthSubmitButton>Sign up</AuthSubmitButton>}
            footer={<SignUpFooter />}
            errorAlert={<AuthAlert error={right(null)} />}

        />

    )
}


