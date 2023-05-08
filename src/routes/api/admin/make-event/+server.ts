import { ADMIN_PASSWORD } from '$env/static/private'
import { insertEvent } from '$lib/server-assets/database'
import type { EventKey } from '$lib/types'
import { json } from '@sveltejs/kit'
import type { RequestEvent, RequestHandler } from './$types'

/**
 * Handles requests for adding new events to the database
 * 
 * @param event 
 * @returns If the request was authorized and the insertion succeeded
 */
export const POST: RequestHandler = async (event_key_req: RequestEvent) => {
    if (event_key_req.request.headers.get('ADMIN_PASSWORD') !== ADMIN_PASSWORD) {
        return json({ success: false, error: 'Unauthorized' }, { status: 401 })
    }
    const event_key: EventKey = await event_key_req.request.json()

    const res = await insertEvent(event_key)

    return json({ success: res })
}
