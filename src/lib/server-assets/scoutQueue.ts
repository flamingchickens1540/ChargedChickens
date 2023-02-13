import type { EventKey, MatchKey, RobotMatch, Robot, Match } from "$lib/types";

let robotMatches: RobotMatch[] = [];

export function setRobots(matchKey: MatchKey, eventkey: EventKey, robots: Robot[]) {
  const match: Match = {
    "matchKey": matchKey,
    "eventKey": eventkey,
  }

  robotMatches = [];
  
  robots.forEach(robot => {
    robotMatches.push({
      "robot": {
        "team_key": robot.team_key,
        "alliance": robot.alliance,
      },
      match,
    });
  });
}

export function pollNextRobot(): RobotMatch | null {
  return robotMatches.shift() ?? null;
}