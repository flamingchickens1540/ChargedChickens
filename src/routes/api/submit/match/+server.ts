import { json } from '@sveltejs/kit'
import type { RequestEvent, RequestHandler } from './$types'
import { endMatch, isInvalidated } from '$lib/server-assets/scoutQueue';
import {
    insertTeamMatch,
    insertCycleTime,
    insertDefenseTime,
} from '$lib/server-assets/database'
import type { Match, MatchKey, Robot, TeamKey, TeamMatch } from '$lib/types'

export const POST: RequestHandler = async (event: RequestEvent) => {
    const body: {
        match: Match
        robot: Robot
        data: TeamMatch
        cycle_times: number[]
        defense_times: number[],
        timestamp : number
    } = await event.request.json()

    if(isInvalidated(body.timestamp)) {
    return json({ success: false, endpoint: 'submit' })
    }

    const dbRes = await Promise.allSettled([
        insertTeamMatch(body.match.match_key, body.robot.team_key, body.data),
        insertCycleTimes(
            body.cycle_times,
            body.match.match_key,
            body.robot.team_key
        ),
        insertDefenseTimes(
            body.defense_times,
            body.match.match_key,
            body.robot.team_key
        ),
    ])

    const result = dbRes.every((res) => res.status === 'fulfilled')

    endMatch();

    return json({ success: result, endpoint: 'submit' })
}

async function insertCycleTimes(
    cycle_times: number[],
    match_key: MatchKey,
    team_key: TeamKey
): Promise<boolean> {
    const results = await Promise.allSettled(
        cycle_times.map(async (time) => {
            insertCycleTime(time, team_key, match_key)
        })
    )

    return results.every((result) => result.status === 'fulfilled')
}

async function insertDefenseTimes(
    defense_times: number[],
    match_key: MatchKey,
    team_key: TeamKey
): Promise<boolean> {
    const results = await Promise.allSettled(
        defense_times.map(async (time) => {
            insertDefenseTime(time, team_key, match_key)
        })
    )

    return results.every((result) => result.status === 'fulfilled')
}
