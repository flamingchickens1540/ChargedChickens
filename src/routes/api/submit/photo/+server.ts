import { json } from "@sveltejs/kit";
import { IMAGE_PATH } from "$env/static/private";
import { writeFileSync } from "fs";
import { randomUUID } from "crypto"
import type { RequestEvent, RequestHandler } from "./$types";
import type { TeamKey } from "$lib/types";

export const POST: RequestHandler = async (event: RequestEvent) => {
  const body: FormData = await event.request.formData();
  const photos = body.getAll("photo") as File[];
  const team_key: TeamKey = body.get("team_key") as TeamKey;

  //for every photo is photos
  photos.forEach(async (photo) => {

    //photo size check
    if (photo.size > 1000000000) return;
    //teamkey regex check
    if (team_key.match(/^frc\d{3,5}$/) === null) return;
    
    writeFileSync(
      IMAGE_PATH +
        team_key + 
        "~" +
        randomUUID() +
        "." +
        photo.type.substring(6, photo.type.length), // the file extension
      Buffer.from(await photo.arrayBuffer())
    );
  });

  return json({ success: true, endpoint: "photo" });
};
