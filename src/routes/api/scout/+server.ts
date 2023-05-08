import { pollNextRobot, getNextPollTime } from '$lib/server-assets/scoutQueue'
import { json } from '@sveltejs/kit'

/**
 * Assigns the next robot in the queue to the scout
 * @see /src/lib/server-assets/scoutQueue.ts
 * @param request 
 * @returns the match and robot being scouted
 */
export const POST = async (_request: Request) => {
    const match = pollNextRobot();

    if (match == null) {
        return json({ success: false, nextPollTime: getNextPollTime() })
    }

    return json({ success: true, ...match })
}
