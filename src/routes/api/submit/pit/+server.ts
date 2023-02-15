import { json } from "@sveltejs/kit";
import type { RequestEvent, RequestHandler } from "./$types";

export const POST: RequestHandler = async (event: RequestEvent) => {
    const body: unknown = await event.request.json()

    console.log(body)
    
    return json({"success": true, "endpoint": "submit"})

}