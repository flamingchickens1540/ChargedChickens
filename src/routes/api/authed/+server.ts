import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'

export const POST: RequestHandler = async () => {
    return json({
        success: true,
        endpoint: 'authed',
    })
}