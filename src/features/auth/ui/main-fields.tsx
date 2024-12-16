'use client'

import { Input } from "@/shared/ui/input"
import { Label } from "@/shared/ui/label"
import { PasswordInput } from "@/shared/ui/password-input"
export default function MainFields({ nameField, formData, errors }: {
    nameField: boolean,
    formData?: FormData,
    errors?: {
        email?: string,
        password?: string,
    }
}) {
    return (
        <>
            {nameField &&
                <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        name='name'
                        defaultValue={formData?.get('name')?.toString()}
                        required
                    />
                </div>}
            <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    name='email'
                    
                    defaultValue={formData?.get('email')?.toString()}
                    required
                />
                {errors?.email && <p className="text-red-500">{errors.email}</p>}
            </div>
            <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <PasswordInput
                    placeholder="Enter your password"
                    id="password"
                    name="password"
                    defaultValue={formData?.get('password')?.toString()}
                    required
                />
                {errors?.password && <p className="text-red-500">{errors.password}</p>}

            </div>
        </>
    )
}

