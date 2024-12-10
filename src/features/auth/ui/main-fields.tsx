'use client'

import { Input } from "@/shared/ui/input"
import { Label } from "@/shared/ui/label"
export default function MainFields({ nameField, email, name, password, setEmail, setName, setPassword }: {
    nameField: boolean
    name: string,
    email: string,
    password: string,
    setName: (name: string) => void,
    setEmail: (email: string) => void,
    setPassword: (password: string) => void,

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
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>}
            <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
        </>
    )
}

