import { ADMIN_PASSWORD } from '$env/static/private'
import { insertEvent } from '$lib/server-assets/database'
import type { EventKey } from '$lib/types'
import { json } from '@sveltejs/kit'
import type { RequestEvent, RequestHandler } from './$types'

export const POST: RequestHandler = async (event: RequestEvent) => {
    if (event.request.headers.get('ADMIN_PASSWORD') !== ADMIN_PASSWORD) {
        return json({ success: false, error: 'Unauthorized' }, { status: 401 })
    }
    const body: { event_key: EventKey } = await event.request.json()

    const res = await insertEvent(body.event_key)

    return json({ success: res })
}
