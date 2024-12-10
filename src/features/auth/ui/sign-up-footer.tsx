import Link from "next/link";

export default function SignUpFooter() {
    return (
        <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link href="/login" className="font-medium text-primary hover:underline">
                Log in
            </Link>
        </p>
    )
};
