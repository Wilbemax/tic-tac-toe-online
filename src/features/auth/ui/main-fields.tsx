'use client'

import { Input } from "@/shared/ui/input"
import { Label } from "@/shared/ui/label"
import { PasswordInput } from "@/shared/ui/password-input"
export default function MainFields({ nameField }: {
    nameField: boolean
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
                    required
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <PasswordInput
                    placeholder="Enter your password"
                    id="password"
                    name="password"
                    required
                />
            </div>
        </>
    )
}

