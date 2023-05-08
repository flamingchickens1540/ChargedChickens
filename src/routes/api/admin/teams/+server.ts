import { json } from '@sveltejs/kit'
import { ADMIN_PASSWORD, TBA_API_KEY } from '$env/static/private'
import type { RequestEvent } from './$types'
import type { Match, MatchKey, TeamKey } from '$lib/types'

/**
 * Collects which teams are in a match from TBA
 * 
 * @fails if there are no robots in the match (according to TBA)
 * @param A request containing the matchkey 
 * @returns an object with the a list of both alliances
 */
export const POST = async (match_req: RequestEvent) => {
    if (match_req.request.headers.get('ADMIN_PASSWORD') !== ADMIN_PASSWORD) {
        return json({ success: false, error: 'Unauthorized' }, { status: 401 })
    }

    const data: MatchKey = await match_req.request.json()

    let alliances: { red?: TeamKey[]; blue?: TeamKey[] } = {}

    try {
        await fetch(
            `https://www.thebluealliance.com/api/v3/match/${data}`,
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
