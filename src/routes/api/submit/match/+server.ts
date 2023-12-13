import { json } from '@sveltejs/kit'
import type { RequestEvent, RequestHandler } from './$types'
import { endMatch } from '$lib/server-assets/scoutQueue';
import {
    insertTeamMatch,
    insertCycleTime,
    insertDefenseTime,
} from '$lib/server-assets/database'
import type { Match, MatchKey, Robot, TeamKey, TeamMatch } from '$lib/types'

/**
 * Inserts match data into the database
 * 
 * @param event 
 * @returns 
 */
export const POST: RequestHandler = async (match_data_req: RequestEvent) => {
    const body: {
        match: Match
        robot: Robot
        data: TeamMatch
        cycle_times: number[]
        defense_times: number[]
    } = await match_data_req.request.json()

    const dbRes = await Promise.allSettled([
        insertTeamMatch(
            body.match.match_key, 
            body.robot.team_key, 
            body.data
        ),
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
/**
 * Inserts each cycle time into the database
 * 
 * @see /src/lib/server-assets/database.ts
 * @param cycle_times 
 * @param match_key 
 * @param team_key 
 * @returns 'fufilled' or not for every cycle
 */
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

/**
 * Inserts every defense time into the database
 * 
 * @param defense_times 
 * @param match_key 
 * @param team_key 
 * @returns 'fufilled' or not for every cycle
 */
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