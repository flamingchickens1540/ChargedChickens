import type { EventKey, MatchKey, RobotMatch, Robot } from '$lib/types'

const invalidatedTimestamps : number[] = [];

let robotMatches: RobotMatch[] = [];
let assignedMatches: RobotMatchp[] = [];

let time = Date.now();
const timeSpace = 500; // Spacing between client timeouts
const hibernationTimeout = 10000;
let ongoingMatch = false;

export function isInvalidated(timestamp : number) : boolean {
    return invalidatedTimestamps.includes(timestamp);
}

export function invalidateTimestamp(timestamp : number) {
    invalidatedTimestamps.push(timestamp);
}

export function setRobots(
    match_key: MatchKey,
    event_key: EventKey,
    robots: Robot[]
) {

    ongoingMatch = true;

    robotMatches = []

    assignedMatches = [];

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

export function getNextPollTime() {
  const currentTime = Date.now();

  if(currentTime > time) {
    time = currentTime;
  }
  
  return ongoingMatch ? (time += timeSpace) + hibernationTimeout : time += timeSpace;
}

export function removeRobotMatch(robotMatch : RobotMatch) {
    robotMatches.splice(robotMatches.indexOf(robotMatch), 1);
}

export function readdRobot(robotMatch : RobotMatch) {
    robotMatches.push(assignedMatches.splice(assignedMatches.indexOf(robotMatch), 1)[0]);
} 

export function getRobotMatches() {
    return robotMatches;
}

export function getAssignedRobotMatches() {
    return assignedMatches;
}

export function pollNextRobot(): RobotMatch | null {
    const nextRobotMatch = robotMatches.shift();
    if(nextRobotMatch)
        assignedMatches.push(nextRobotMatch);
    return nextRobotMatch ?? null;
}
