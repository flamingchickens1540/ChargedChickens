import { json } from "@sveltejs/kit";
import { setRobots } from "$lib/server-assets/scoutQueue";
import type { AssignData, Robot } from "$lib/types";
import type { RequestEvent } from "./$types";
import { DEBUG } from "$lib/generalStores";

export const POST = async ({request}: RequestEvent) => {
  const data: AssignData = await request.json()

  if(DEBUG) console.log(data);
  if(!data.robots) return json({"success": false, "endpoint": "assign"});

  const robots: Robot[] = [];

  data.robots.red.forEach(teamKey => {
    robots.push({
      "team_key": teamKey,
      "alliance": "red"
    })
  })

  data.robots.blue.forEach(teamKey => {
    robots.push({
      "team_key": teamKey,
      "alliance": "blue"
    })
  })

  setRobots(data.match_key, data.event_key, robots)

  return json({"success": true, "endpoint": "assign"});
}