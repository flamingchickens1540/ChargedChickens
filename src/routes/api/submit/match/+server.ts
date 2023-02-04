import type { RequestEvent, RequestHandler } from "./$types";
import { isAuthed, insertTeamMatch, getTeamMatch, insertTeam, getTeam, insertDefenseTime } from "$lib/database";
import type { TeamMatch } from "$lib/types";

const authed = isAuthed();

export const POST: RequestHandler = async (event: RequestEvent) => {
  const body: object = await event.request.json();

  if (authed) {
    const result = await insertTeamMatch("2022orore_qm5", "frc1540", body as TeamMatch)
    console.log(await insertTeamMatch("2022orore_qm5", "frc1540", body as TeamMatch))
    console.log(await getTeamMatch("2022orore_qm5", "frc1540"))
    console.log(await insertTeam({team_key: "frc2471", nickname: "Team Mean Machine", team_number: 2471, website: "https://www.teammeanmachine.com"}))
    console.log(await getTeam("frc2471"))
    console.log(await insertDefenseTime("2022orore_qm5", "frc1540", {time: 1000, team: "frc1540", match: "2022orore_qm5"}))
  
    console.log(result)
  }

  console.log(body)

  return new Response(
    JSON.stringify({ message: "success", endpoint: "match-scout" }),
    {
      headers: {
        "content-type": "application/json",
      },
      status: 200,
    }
  );
};
