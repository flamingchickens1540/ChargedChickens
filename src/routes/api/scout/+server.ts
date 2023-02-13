import { getRobotMatch } from "$lib/server-assets/scoutQueue";
import { json } from "@sveltejs/kit";

export const POST = async (request: Request) => {
  const match = getRobotMatch()

  return json({"success": match != null, ...match})
}