import { ADMIN_PASSWORD } from "$env/static/private";
import { json } from "@sveltejs/kit";
import type { RequestEvent, RequestHandler } from "./$types";

export const POST: RequestHandler = async (event: RequestEvent) => {
  const body: any = await event.request.json()
  
  return json({"success": body?.password === ADMIN_PASSWORD, "endpoint": "authed"})
}