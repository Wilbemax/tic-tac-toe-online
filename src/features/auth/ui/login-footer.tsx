import Link from "next/link";

export default function LoginFooter() {
    return (
        <>
            <Link href="/forgot-password" className="text-sm text-gray-600 hover:underline">
                Forgot password?
            </Link>
            <p className="text-sm text-gray-600">
                Don&apos;t have an account?{' '}
                <Link href="/sign-up" className="font-medium text-primary hover:underline">
                    Sign up
                </Link>
            </p>
        </>
    )
};
