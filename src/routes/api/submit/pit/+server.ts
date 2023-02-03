import type { RequestEvent, RequestHandler } from "./$types";

export const POST: RequestHandler = async (event: RequestEvent) => {
    const body: unknown = await event.request.json()

    console.log(body)
    
    return new Response(JSON.stringify({ message: "success!", endpoint: "match-scout"}), {
        headers: {
            "content-type": "application/json",
        },
        status: 200,
    })
}