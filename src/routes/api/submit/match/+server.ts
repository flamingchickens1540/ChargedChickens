import { json } from "@sveltejs/kit";
import type { RequestEvent, RequestHandler } from "./$types";
import { insertTeamMatch } from "$lib/server-assets/database";
import type { Match, Robot, TeamMatch } from "$lib/types";

export const POST: RequestHandler = async (event: RequestEvent) => {
  const body: { match: Match, robot: Robot, data: TeamMatch } = await event.request.json();

  const result = await insertTeamMatch(body.match.match_key, body.robot.team_key, body.data);

  return json({"success": result, "endpoint": "submit"})
};
