import mysql from "mysql2";
import {
  MYSQL_HOST,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_DATABASE,
} from "$env/static/private";
import type { EventKey, MatchKey, Team, TeamEvent, TeamKey, TeamMatch } from "$lib/types";

const DBTESTING = false;

const db = mysql
  .createPool({
    host: MYSQL_HOST,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
  })
  .promise();

/**
 * Inserts all match scouting data into a SQL database
 *
 * @param match_key
 * @param team_key
 * @param team_data
 * @returns A promise of a boolean representing whether the insertion was successful or not
 */
export async function insertTeamMatch(
  match_key: MatchKey,
  team_key: TeamKey,
  team_data: TeamMatch
): Promise<boolean> {
  if (!DBTESTING) return true;

  try {
    await db.query(
      `
  INSERT INTO TeamMatches (match_key, team_key, broke, died, notes, skill, auto_charge_station, end_charge_station, auto_high_left_succeed, auto_high_center_succeed, auto_high_right_succeed, auto_mid_left_succeed, auto_mid_center_succeed, auto_mid_right_succeed, auto_low_left_succeed, auto_low_center_succeed, auto_low_right_succeed, auto_high_left_fail, auto_high_center_fail, auto_high_right_fail, auto_mid_left_fail, auto_mid_center_fail, auto_mid_right_fail, auto_low_left_fail, auto_low_center_fail, auto_low_right_fail, tele_high_left_succeed, tele_high_center_succeed, tele_high_right_succeed, tele_mid_left_succeed, tele_mid_center_succeed, tele_mid_right_succeed, tele_low_left_succeed, tele_low_center_succeed, tele_low_right_succeed, tele_high_left_fail, tele_high_center_fail, tele_high_right_fail, tele_mid_left_fail, tele_mid_center_fail, tele_mid_right_fail, tele_low_left_fail, tele_low_center_fail, tele_low_right_fail)
  VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
      [
        match_key,
        team_key,
        team_data.broke,
        team_data.died,
        team_data.notes,
        team_data.skill,
        team_data.auto_charge_station,
        team_data.end_charge_station,
        team_data.auto_high_left_succeed,
        team_data.auto_high_center_succeed,
        team_data.auto_high_right_succeed,
        team_data.auto_mid_left_succeed,
        team_data.auto_mid_center_succeed,
        team_data.auto_mid_right_succeed,
        team_data.auto_low_left_succeed,
        team_data.auto_low_center_succeed,
        team_data.auto_low_right_succeed,
        team_data.auto_high_left_fail,
        team_data.auto_high_center_fail,
        team_data.auto_high_right_fail,
        team_data.auto_mid_left_fail,
        team_data.auto_mid_center_fail,
        team_data.auto_mid_right_fail,
        team_data.auto_low_left_fail,
        team_data.auto_low_center_fail,
        team_data.auto_low_right_fail,
        team_data.tele_high_left_succeed,
        team_data.tele_high_center_succeed,
        team_data.tele_high_right_succeed,
        team_data.tele_mid_left_succeed,
        team_data.tele_mid_center_succeed,
        team_data.tele_mid_right_succeed,
        team_data.tele_low_left_succeed,
        team_data.tele_low_center_succeed,
        team_data.tele_low_right_succeed,
        team_data.tele_high_left_fail,
        team_data.tele_high_center_fail,
        team_data.tele_high_right_fail,
        team_data.tele_mid_left_fail,
        team_data.tele_mid_center_fail,
        team_data.tele_mid_right_fail,
        team_data.tele_low_left_fail,
        team_data.tele_low_center_fail,
        team_data.tele_low_right_fail,
      ]
    );

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function insertImage(
  event_key: EventKey,
  team_key: TeamKey,
  url: string
): Promise<boolean> {
  if (!DBTESTING) return true;

  try {
    await db.query(
      `
  INSERT INTO Images (event_key, team_key, url)
  VALUES (?,?,?)`,
      [event_key, team_key, url]
    );

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function getTeamMatch(
  match_key: MatchKey,
  team_key: TeamKey
): Promise<TeamMatch | null> {
  if (!DBTESTING) return Promise.resolve({
		"broke": false,
		"died": false,
		"notes": "these are notes",
		"skill": 3,
		"auto_charge_station": 0,
		"end_charge_station": 0,
		"auto_high_left_succeed": 0,
		"auto_high_center_succeed": 1,
		"auto_high_right_succeed": 0,
		"auto_mid_left_succeed": 0,
		"auto_mid_center_succeed": 0,
		"auto_mid_right_succeed": 0,
		"auto_low_left_succeed": 0,
		"auto_low_center_succeed": 0,
		"auto_low_right_succeed": 0,
		"auto_high_left_fail": 1,
		"auto_high_center_fail": 0,
		"auto_high_right_fail": 0,
		"auto_mid_left_fail": 1,
		"auto_mid_center_fail": 0,
		"auto_mid_right_fail": 0,
		"auto_low_left_fail": 0,
		"auto_low_center_fail": 0,
		"auto_low_right_fail": 0,
		"tele_high_left_succeed": 1,
		"tele_high_center_succeed": 0,
		"tele_high_right_succeed": 3,
		"tele_mid_left_succeed": 0,
		"tele_mid_center_succeed": 0,
		"tele_mid_right_succeed": 1,
		"tele_low_left_succeed": 0,
		"tele_low_center_succeed": 0,
		"tele_low_right_succeed": 0,
		"tele_high_left_fail": 0,
		"tele_high_center_fail": 2,
		"tele_high_right_fail": 0,
		"tele_mid_left_fail": 0,
		"tele_mid_center_fail": 0,
		"tele_mid_right_fail": 0,
		"tele_low_left_fail": 0,
		"tele_low_center_fail": 1,
		"tele_low_right_fail": 0
	} as TeamMatch);

  try {
    const [rows] = await db.query(
      `
  SELECT * FROM TeamMatches WHERE match_key = ? AND team_key = ?`,
      [match_key, team_key]
    );

    return rows[0] ?? null;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getEvent(event_key: EventKey): Promise<TeamEvent | null> {
  if (!DBTESTING) return Promise.resolve({id: 1, team_key: "frc1540", event_key: "1540test"} as TeamEvent);

  try {
    const [rows] = await db.query(`SELECT * FROM Events WHERE event_key = ?`, [
      event_key,
    ]);

    return rows[0] ?? null;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getTeam(team_key: TeamKey): Promise<Team | null> {
  if (!DBTESTING) return Promise.resolve({ team_key: "frc1540", nickname: "Team 1540", team_number: 1540, website: "team1540.org"} as Team);
  try {
    const [rows] = await db.query(`SELECT * FROM Teams WHERE team_key = ?`, [
      team_key,
    ]);

    return rows[0] ?? null;
  } catch (error) {
    console.error(error);
    return null;
  }
}