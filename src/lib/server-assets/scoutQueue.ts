import type { EventKey, MatchKey, RobotMatch, Robot, Match } from "$lib/types";

let robotMatches: RobotMatch[] = [];

export function setRobots(match_key: MatchKey, event_key: EventKey, robots: Robot[]) {
  const match: Match = {
    "match_key": match_key,
    "event_key": event_key,
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