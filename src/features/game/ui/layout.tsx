import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/shared/ui/card"

export function GameLayout({ actions, field, players, status }: {
    players?: React.ReactNode
    status?: React.ReactNode
    actions?: React.ReactNode
    field?: React.ReactNode
}) {
    //5:01
    return (
        <Card>
            <CardHeader>
                <CardTitle>Крестики нолики 3x3</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">{players}{status}{field}</CardContent>
            <CardFooter>{actions}</CardFooter>
        </Card>
    )
}