import { useEffect, useState } from "react";

export function useEventsSource<T>(url: string, ) {
    const [isPending, setIsPending] = useState<boolean>(true)
    const [data, setData] = useState<T>()
    const [error, setError] = useState<unknown | undefined>()


    useEffect(() => {
        const gameEvents = new EventSource(url)

        gameEvents.addEventListener('message', (m) => {
            try {
                setIsPending(false)
                setError(undefined)
                setData(JSON.parse(m.data))
            } catch (e) {
                setError(e)
            }
        })
        gameEvents.addEventListener('error', (e) => {
            setError(e)
        })

        return () => gameEvents.close()
    }, [url])

    return {
        isPending,
        dataStream: data,
        error
    }
}