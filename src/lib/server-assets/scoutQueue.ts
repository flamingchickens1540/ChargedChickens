import type { EventKey, MatchKey, RobotMatch, Robot } from '$lib/types'

let robotMatches: RobotMatch[] = []

export function setRobots(
    match_key: MatchKey,
    event_key: EventKey,
    robots: Robot[]
) {
    robotMatches = []

    robots.forEach((robot) => {
        robotMatches.push({
            robot: {
                team_key: robot.team_key,
                alliance: robot.alliance,
            },
            match: {
                match_key: match_key,
                event_key: event_key,
            },
        })
    })
}

export function pollNextRobot(): RobotMatch | null {
    return robotMatches.shift() ?? null
}
