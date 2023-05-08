import { ADMIN_PASSWORD, TBA_API_KEY } from '$env/static/private'
import { getTeams, insertMatch, insertTeam } from '$lib/server-assets/database'
import { setRobots } from '$lib/server-assets/scoutQueue'
import type { AssignData, Robot, Team, TeamKey } from '$lib/types'
import { json } from '@sveltejs/kit'
import type { RequestEvent } from './$types'

/**
 * Returns the team data for the team in json format
 * 
 * @fails if the key, nickname, team_number, or website properties don't exist on TBA's response
 * @param team_key 
 * @returns the requested team's data
 */
async function getBlueAllianceRes(team_key: string): Promise<Team> {
    const res = await fetch(
        `https://www.thebluealliance.com/api/v3/team/${team_key}`,
        {
            headers: { 'X-TBA-Auth-Key': TBA_API_KEY },
        }
    ).then(data => data.json() as any)

    return {
        team_key: res.key,
        nickname: res.nickname,
        team_number: res.team_number,
        website: res.website
    }
}

/**
 * Handles starting a new match.
 * Inserts a match to the database. 
 * Adds the given teams as well.
 * Sends the teams and which alliance they're on to the scout queuing system
 * @fails if the match or team insertion fails
 * @see /src/lib/server-assets
 * @param the request containing the match assignment data
 * @returns a success boolean
 */
export const POST = async (match_assignment_req: RequestEvent) => {
    if (match_assignment_req.request.headers.get('ADMIN_PASSWORD') !== ADMIN_PASSWORD)
        return json({ success: false, error: 'Unauthorized' }, { status: 401 })

    const data: AssignData = await match_assignment_req.request.json()
    const robots: Robot[] = []

    try {
        // add match to database
        if (!(await insertMatch(data.match_key, data.event_key))) {
            throw new Error("Couldn't insert match")
        }

        // add teams to database
        const dbTeams: TeamKey[] =
            (await getTeams())?.map(({ team_key }) => team_key) || []

        for (const robot of robots) {
            if (!dbTeams.includes(robot.team_key)) {
                const baRes: Team = await getBlueAllianceRes(robot.team_key)

                const teamRes: boolean = await insertTeam(
                    baRes.team_key,
                    baRes.nickname,
                    baRes.team_number,
                    baRes.website
                )

                if (!teamRes) throw new Error("Couldn't insert team")
            }
        }

        // add robots to queue
        // for (const {red, blue} in data.robots)
        data.robots.red.forEach((key) => {
            robots.push({ team_key: key, alliance: 'red' })
        })

        data.robots.blue.forEach((key) => {
            robots.push({ team_key: key, alliance: 'blue' })
        })

        setRobots(data.match_key, data.event_key, robots)

        return json({ success: true })
    } catch (error) {
        return json({ success: false })
    }
}