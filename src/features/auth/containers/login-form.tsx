'use client'

import { useState } from 'react'
import { AuthFormLayout } from '../ui/auth-form-layout'
import MainFields from '../ui/main-fields'
import AuthSubmitButton from '../ui/submit-button'
import AuthAlert from '../ui/auth-alert'
import { right } from '@/shared/lib/either'
import LoginFooter from '../ui/login-footer'

export default function LoginForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = async () => {

    }

    return (

        <AuthFormLayout
            title='Login'
            description='Welcome back! Please login to your account'
            onSubmit={handleSubmit}
            baseInputs={
                <MainFields
                    nameField={false}
                    name={name}
                    email={email}
                    password={password}
                    setEmail={setEmail}
                    setPassword={setPassword}
                    setName={setName}
                />}
            submitButton={<AuthSubmitButton>Sign up</AuthSubmitButton>}
            footer={<LoginFooter />}
            errorAlert={<AuthAlert error={right(null)} />}

        />

    )
}


