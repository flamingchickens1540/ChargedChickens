import type { RequestEvent, RequestHandler } from "./$types";
import { insertTeamMatch } from "$lib/database";
import type { TeamMatch } from "$lib/types";
const DBTESTING = false;

export const POST: RequestHandler = async (event: RequestEvent) => {
  const body: object = await event.request.json();

  if (DBTESTING) {
    const result = await insertTeamMatch("2022orore_qm5", "frc1540", body as TeamMatch)
  } else {
    console.log(body)
  }

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
