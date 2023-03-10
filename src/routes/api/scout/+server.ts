import { pollNextRobot, getNextPollTime } from '$lib/server-assets/scoutQueue'
import { json } from '@sveltejs/kit'

export const POST = async (request: Request) => {
    const match = pollNextRobot();

    if(match == null) {
        return json({ success: false, nextPollTime: getNextPollTime() })
    }

    return json({ success: true, ...match })
}