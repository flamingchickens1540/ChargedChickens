import mysql from "mysql2";
import {
  MYSQL_HOST,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_DATABASE,
} from "$env/static/private";
import type { CycleTime, DefenseTime, EventKey, Match, MatchKey, PitScoutingData, Team, TeamKey, TeamMatch } from "$lib/types";

const db = mysql
  .createPool({
    host: MYSQL_HOST,
    user: MYSQL_USER,
    //we dont talk about this, but the env is not importing properly
    password: "$j" + MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
  })
  .promise();

export function isAuthed(): boolean {
  if (MYSQL_HOST && MYSQL_USER && MYSQL_PASSWORD && MYSQL_DATABASE) {
    return true;
  }
  
  return false;
}

export async function insertTeamMatch(
  matchKey: MatchKey,
  teamKey: TeamKey,
  teamData: TeamMatch
): Promise<boolean> {
  try {
    await db.query(
      `
  INSERT INTO TeamMatches (match_key, team_key, broke, died, notes, skill, auto_charge_station, end_charge_station, auto_high_left_succeed, auto_high_center_succeed, auto_high_right_succeed, auto_mid_left_succeed, auto_mid_center_succeed, auto_mid_right_succeed, auto_low_left_succeed, auto_low_center_succeed, auto_low_right_succeed, auto_high_left_fail, auto_high_center_fail, auto_high_right_fail, auto_mid_left_fail, auto_mid_center_fail, auto_mid_right_fail, auto_low_left_fail, auto_low_center_fail, auto_low_right_fail, tele_high_left_succeed, tele_high_center_succeed, tele_high_right_succeed, tele_mid_left_succeed, tele_mid_center_succeed, tele_mid_right_succeed, tele_low_left_succeed, tele_low_center_succeed, tele_low_right_succeed, tele_high_left_fail, tele_high_center_fail, tele_high_right_fail, tele_mid_left_fail, tele_mid_center_fail, tele_mid_right_fail, tele_low_left_fail, tele_low_center_fail, tele_low_right_fail)
  VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
      [
        matchKey,
        teamKey,
        teamData.broke,
        teamData.died,
        teamData.notes,
        teamData.skill,
        teamData.auto_charge_station,
        teamData.end_charge_station,
        teamData.auto_high_left_succeed,
        teamData.auto_high_center_succeed,
        teamData.auto_high_right_succeed,
        teamData.auto_mid_left_succeed,
        teamData.auto_mid_center_succeed,
        teamData.auto_mid_right_succeed,
        teamData.auto_low_left_succeed,
        teamData.auto_low_center_succeed,
        teamData.auto_low_right_succeed,
        teamData.auto_high_left_fail,
        teamData.auto_high_center_fail,
        teamData.auto_high_right_fail,
        teamData.auto_mid_left_fail,
        teamData.auto_mid_center_fail,
        teamData.auto_mid_right_fail,
        teamData.auto_low_left_fail,
        teamData.auto_low_center_fail,
        teamData.auto_low_right_fail,
        teamData.tele_high_left_succeed,
        teamData.tele_high_center_succeed,
        teamData.tele_high_right_succeed,
        teamData.tele_mid_left_succeed,
        teamData.tele_mid_center_succeed,
        teamData.tele_mid_right_succeed,
        teamData.tele_low_left_succeed,
        teamData.tele_low_center_succeed,
        teamData.tele_low_right_succeed,
        teamData.tele_high_left_fail,
        teamData.tele_high_center_fail,
        teamData.tele_high_right_fail,
        teamData.tele_mid_left_fail,
        teamData.tele_mid_center_fail,
        teamData.tele_mid_right_fail,
        teamData.tele_low_left_fail,
        teamData.tele_low_center_fail,
        teamData.tele_low_right_fail,
      ]
    );

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function getTeamMatch(
  matchKey: string,
  teamKey: string
): Promise<TeamMatch | null> {
  try {
    const [rows]  = await db.query(
      `
  SELECT * FROM TeamMatches WHERE match_key = ? AND team_key = ?`,
      [matchKey, teamKey]
    );

    return rows[0];
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function insertTeam(Team: Team): Promise<boolean> {
  try {
    await db.query(
      `
  INSERT INTO Teams (team_key, nickname, team_number, website)
  VALUES (?,?,?,?)`,
      [
        Team.team_key,
        Team.nickname,
        Team.team_number,
        Team.website,
      ]
    );

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function getTeam(team_key: TeamKey): Promise<Team | null> {
  try {
    const [rows] = await db.query(
      `
  SELECT * FROM Teams WHERE team_key = ?`,
      [team_key]
    );

    return rows[0];
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function insertCycleTime(match_key: MatchKey, team_key: TeamKey, cycleTime: CycleTime): Promise<boolean> {
  try {
    await db.query(
      `
  INSERT INTO CycleTimes (time, team_key, match_key)
  VALUES (?,?,?)`,
      [cycleTime, team_key, match_key]
    );

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function insertDefenseTime(match_key: MatchKey, team_key: TeamKey, defenseTime: DefenseTime): Promise<boolean> {
  try {
    await db.query(
      `
  INSERT INTO DefenseTimes (time, team_key, match_key)
  VALUES (?,?,?)`,
      [defenseTime, team_key, match_key]
    );

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function insertEvent(eventKey: EventKey): Promise<boolean> {
  try {
    await db.query(
      `
  INSERT INTO Events (event_key)
  VALUES (?)`,
      [eventKey]
    );

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function insertMatch(matchKey: MatchKey, eventKey: EventKey): Promise<boolean> {
  try {
    await db.query(
      `
  INSERT INTO Matches (match_key, event_key)
  VALUES (?,?)`,
      [matchKey, eventKey]
    );

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function getMatch(matchKey: MatchKey): Promise<Match | null> {
  try {
    const [rows] = await db.query(
      `
  SELECT * FROM Matches WHERE match_key = ?`,
      [matchKey]
    );

    return rows[0];
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getEvent(eventKey: EventKey): Promise<Event | null> {
  try {
    const [rows] = await db.query(
      `
  SELECT * FROM Events WHERE event_key = ?`,
      [eventKey]
    );

    return rows[0];
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function insertPitScouting(match_key: MatchKey, team_key: TeamKey, data: PitScoutingData): Promise<boolean> {
  try {
    await db.query(
      `
  INSERT INTO PitScouting (team_key, event_key, width, drivetrain, polish, notes, length)
  VALUES (?,?, ?, ?, ?, ?, ?)`,
      [
        team_key,
        match_key,
        data.width,
        data.drivetrain,
        data.polish,
        data.notes,
        data.length,
      ]
    );

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}