/* eslint-disable @typescript-eslint/no-empty-object-type */
'use client'

import * as React from 'react'
import { Input } from "@/shared/ui/input"
import { Button } from "@/shared/ui/button"
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import { cn } from "@/shared/lib/css"

interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
    ({ className, ...props }, ref) => {
        const [showPassword, setShowPassword] = React.useState(true)
        
        return (
            <div className="relative">
                <Input
                    type={showPassword ? 'text' : 'password'}
                    className={cn('pr-10', className)}
                    ref={ref}
                    {...props}
                />
                <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                    {showPassword ? (
                        <EyeOffIcon className="h-4 w-4" aria-hidden="true" />
                    ) : (
                        <EyeIcon className="h-4 w-4" aria-hidden="true" />
                    )}
                </Button>
            </div>
        )
    }
)
PasswordInput.displayName = 'PasswordInput'

export { PasswordInput }

