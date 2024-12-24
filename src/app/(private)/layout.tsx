import { sessionService, } from "@/entities/user/server";
import { Button } from "@/shared/ui/button";
import Logo from "@/shared/ui/logo";
import type { Metadata } from "next";
import { redirect } from "next/navigation";


export const metadata: Metadata = {
  title: "Play online in TTO",
  description: "Tic-tac-toe online by wbm",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { session } = await sessionService.verifySession()
  return (

    <div className="flex  flex-col grow">
      <header className="w-full px-14 py-3 flex flex-row justify-between border-b border-b-primary/10 items-center">
        <Logo />
        <div className="flex flex-row gap-4 items-center">
          <div>{session.login}</div>
          <form action={async () => {
            "use server"
            await sessionService.deleteSession()
            redirect('/login');
          }}>
            <Button type="submit">Log out</Button>
          </form>
        </div>
      </header>
      {children}

    </div>

  );
}
