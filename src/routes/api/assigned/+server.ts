import { removeRobotMatch } from '$lib/server-assets/scoutQueue'
import type { RobotMatch } from '$lib/types'
import { json } from '@sveltejs/kit'

export const POST = async (request: Request) => {
    removeRobotMatch(await request.json() as RobotMatch);
    return json({success : true});
}