import { ADMIN_PASSWORD } from '$env/static/private';
import { invalidateTimestamp } from '$lib/server-assets/scoutQueue';
import { json } from '@sveltejs/kit';

export const POST = async (event: Request) => {
    if (event.headers.get('ADMIN_PASSWORD') !== ADMIN_PASSWORD)
        return json({ success: false, error: 'Unauthorized' }, { status: 401 })
    
    invalidateTimestamp((await event.json()).timestamp);
}