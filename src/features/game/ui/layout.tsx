import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card"

export function GameLayout({ field, players, status }: {
    players?: React.ReactNode
    status?: React.ReactNode
    // actions?: React.ReactNode
    field?: React.ReactNode
}) {
    //5:01
    return (
        <Card>
            <CardHeader>
                <CardTitle>Крестики нолики 3x3</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                {players}
                {status}
                <div className="flex items-center justify-center">
                    {field}
                </div>
            </CardContent>
            {/* <CardFooter>{actions}</CardFooter> */}
        </Card>
    )
}