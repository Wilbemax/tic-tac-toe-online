import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "Sign-Up | login in TTO",
  description: "Create an account, and play with friends",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <div className="flex items-center justify-center min-h-screen bg-background">
        {children}
      </div>
    
  );
}
