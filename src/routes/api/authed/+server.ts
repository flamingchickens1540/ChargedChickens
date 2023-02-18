import { PASSPHRASE } from "$env/static/private";
import { json } from "@sveltejs/kit";
import type { RequestEvent, RequestHandler } from "./$types";

export const POST: RequestHandler = async (event: RequestEvent) => {
  const body: any = await event.request.json()
  
  return json({"success": body?.passphrase === PASSPHRASE, "endpoint": "authed"})
}