import type { EventKey, MatchKey, RobotMatch, Robot } from '$lib/types'

let robotMatches: RobotMatch[] = [];
let time = Date.now();

/**
 * Spacing between client timeouts
 */
const timeSpace = 500;
const hibernationTimeout = 10000;
let ongoingMatch = false;

export function setRobots(
    match_key: MatchKey,
    event_key: EventKey,
    robots: Robot[]
) {
    ongoingMatch = true;

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

export function endMatch() {
    ongoingMatch = false;
}

/**
 * if @this time is less than @this Date.now(), time is reset to that
 * increments @this time by @this timeSpace
 * @returns the next time a client should resend
 */
export function getNextPollTime() {
    const currentTime = Date.now();
    
    if (currentTime > time) time = currentTime;
  
    return ongoingMatch ? (time += timeSpace) + hibernationTimeout : time += timeSpace;
}

export function pollNextRobot(): RobotMatch | null {
    return robotMatches.shift() ?? null
}
