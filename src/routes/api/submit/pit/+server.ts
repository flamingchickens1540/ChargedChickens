import { json } from '@sveltejs/kit'
import type { RequestEvent, RequestHandler } from './$types'
import { insertPitScoutingData } from '$lib/server-assets/database'
import type { EventKey, PitScoutData, TeamKey } from '$lib/types'

/**
 * Handles the requests to insert pitscouting data in the database
 * 
 * @param event 
 * @returns 
 */
export const POST: RequestHandler = async (pit_data_req: RequestEvent) => {
    const body: { 
        event_key: EventKey; 
        team_key: TeamKey; 
        data: PitScoutData } = 
            await pit_data_req.request.json()
 
    const result = await insertPitScoutingData(
        body.event_key,
        body.team_key,
        body.data
    )

    return json({ success: result, endpoint: 'submit' })
}
