import mysql, { type RowDataPacket } from "mysql2";
import {
  MYSQL_HOST,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_DATABASE,
} from "$env/static/private";
import type { Team, TeamKey, TeamMatch } from "$lib/types";

const db = mysql
  .createPool({
    host: MYSQL_HOST,
    user: MYSQL_USER,
    //we dont talk about this, but the env is not importing properly
    password: "$j" + MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
  })
  .promise();

export async function insertTeamMatch(
  matchKey: string,
  teamKey: string,
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

async function getTeams(team_key: TeamKey): Promise<Team | null> {
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