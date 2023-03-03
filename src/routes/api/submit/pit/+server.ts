import { json } from '@sveltejs/kit'
import type { RequestEvent, RequestHandler } from './$types'
import { insertPitScoutingData } from '$lib/server-assets/database'
import type { EventKey, PitScoutData, TeamKey } from '$lib/types'

export const POST: RequestHandler = async (event: RequestEvent) => {
    const body: { event_key: EventKey; team_key: TeamKey; data: PitScoutData } =
        await event.request.json()

    const result = await insertPitScoutingData(
        body.event_key,
        body.team_key,
        body.data
    )

    return json({ success: result, endpoint: 'submit' })
}
