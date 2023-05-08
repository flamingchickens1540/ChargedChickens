import { ADMIN_PASSWORD } from '$env/static/private'
import { json } from '@sveltejs/kit'
import type { RequestEvent, RequestHandler } from './$types'

/**
 * @param event 
 * @returns if the admin is authenticated
 */
export const POST: RequestHandler = async (password_req: RequestEvent) => {
    const password = (await password_req.request.json() as any).password

    return json({
        success: password === ADMIN_PASSWORD,
        endpoint: 'authed',
    })
}
