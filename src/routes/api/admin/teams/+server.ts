import { json } from '@sveltejs/kit'
import { ADMIN_PASSWORD, TBA_API_KEY } from '$env/static/private'
import type { RequestEvent } from './$types'
import type { MatchKey, TeamKey } from '$lib/types'

export const POST = async (event: RequestEvent) => {
    if (event.request.headers.get('ADMIN_PASSWORD') !== ADMIN_PASSWORD) {
        return json({ success: false, error: 'Unauthorized' }, { status: 401 })
    }

    const data: { match_key: MatchKey } = await event.request.json()

    let alliances: { red?: TeamKey[]; blue?: TeamKey[] } = {}

    try {
        await fetch(
            `https://www.thebluealliance.com/api/v3/match/${data.match_key}`,
            {
                headers: { 'X-TBA-Auth-Key': TBA_API_KEY },
            }
        )
            .then((res) => res.json())
            .then((data) => {
                alliances = {
                    red: data.alliances.red.team_keys,
                    blue: data.alliances.blue.team_keys,
                }
            })
    } catch (error) {
        /* empty */
    }

    return json({ success: alliances !== null, ...alliances })
}
