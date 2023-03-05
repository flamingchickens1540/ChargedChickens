import { pollNextRobot, getTimeout } from '$lib/server-assets/scoutQueue'
import { json } from '@sveltejs/kit'

export const POST = async (request: Request) => {
    const match = pollNextRobot();

    if(match == null) {
        return json({ success: false, timeout: getTimeout() })
    }

    return json({ success: true, ...match })
}
