import { json } from '@sveltejs/kit'
import { setRobots } from '$lib/server-assets/scoutQueue'
import { ADMIN_PASSWORD, TBA_API_KEY } from '$env/static/private'
import type { AssignData, Robot } from '$lib/types'
import type { RequestEvent } from './$types'
import {
    getTeams,
    insertMatch,
    insertTeam,
} from '$lib/server-assets/database'

export const POST = async (event: RequestEvent) => {
    if (event.request.headers.get('ADMIN_PASSWORD') !== ADMIN_PASSWORD)
        return json({ success: false, error: 'Unauthorized' }, { status: 401 })

    const data: AssignData = await event.request.json()
    const robots: Robot[] = []

    try {
        //add match to database
        if (!(await insertMatch(data.match_key, data.event_key))) throw new Error("Couldn't insert match")

        //add teams to database
        const dbteams = (await getTeams())?.map((team) => team.team_key) || []
        robots.forEach((robot) => {
            if (!dbteams.includes(robot.team_key)) {
                fetch(
                    `https://www.thebluealliance.com/api/v3/team/${robot.team_key}`,
                    { headers: { 'X-TBA-Auth-Key': TBA_API_KEY } }
                )
                    .then((res) => res.json())
                    .then(async (data) => {
                        if (!(await insertTeam(
                            data.key,
                            data.nickname,
                            data.team_number,
                            data.website
                        ))) throw new Error("Couldn't insert team")
                    })
            }
        })

        //add robots to queue
        data.robots.red.forEach((team_key) => {
            robots.push({
                team_key: team_key,
                alliance: 'red',
            })
        })
        data.robots.blue.forEach((team_key) => {
            robots.push({
                team_key: team_key,
                alliance: 'blue',
            })
        })
        setRobots(data.match_key, data.event_key, robots)

        return json({ success: true})
    } catch (error) {
        return json({ success: false })
    }
}