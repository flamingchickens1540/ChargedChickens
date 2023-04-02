import { ADMIN_PASSWORD, TBA_API_KEY } from '$env/static/private'
import { getTeams, insertMatch, insertTeam } from '$lib/server-assets/database'
import { setRobots } from '$lib/server-assets/scoutQueue'
import type { AssignData, Robot } from '$lib/types'
import { json } from '@sveltejs/kit'
import type { RequestEvent } from './$types'

async function getBlueAllianceRes(team_key: string) {
    const res = await fetch(
        `https://www.thebluealliance.com/api/v3/team/${team_key}`,
        {
            headers: { 'X-TBA-Auth-Key': TBA_API_KEY },
        }
    )

    return res.json()
}

export const POST = async (event: RequestEvent) => {
    if (event.request.headers.get('ADMIN_PASSWORD') !== ADMIN_PASSWORD) {
        return json({ success: false, error: 'Unauthorized' }, { status: 401 })
    }

    const data: AssignData = await event.request.json()
    const robots: Robot[] = []

    try {
        //add match to database
        if (!(await insertMatch(data.match_key, data.event_key))) {
            throw new Error("Couldn't insert match")
        }

        //add teams to database
        const dbTeams =
            (await getTeams())?.map(({ team_key }) => team_key) || []

        for (const robot of robots) {
            if (!dbTeams.includes(robot.team_key)) {
                const baRes = await getBlueAllianceRes(robot.team_key)

                const teamRes = await insertTeam(
                    baRes.key,
                    baRes.nickname,
                    baRes.team_number,
                    baRes.website
                )

                if (!teamRes) throw new Error("Couldn't insert team")
            }
        }

        //add robots to queue
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