import mysql from 'mysql2'
import {
    MYSQL_HOST,
    MYSQL_USER,
    MYSQL_PASSWORD,
    MYSQL_DATABASE,
    USE_DB
} from '$env/static/private'
import type {
    EventKey,
    MatchKey,
    PitScoutData,
    Team,
    TeamEvent,
    TeamKey,
    TeamMatch,
} from '$lib/types'

const use_db: boolean = USE_DB === "true";

const db = mysql
    .createPool({
        host: MYSQL_HOST,
        user: MYSQL_USER,
        password: MYSQL_PASSWORD,
        database: MYSQL_DATABASE,
    })
    .promise()

/**
 * Inserts an event into the database
 * 
 * @param event_key - The event key
 * @returns The promise of if it succeeded or not
 */
export async function insertEvent(event_key: EventKey): Promise<boolean> {
    if (!use_db
    ) return true

    try {
        await db.query(
            `
    INSERT INTO Events (event_key)
    VALUES (?)`,
            [event_key]
        )

        return true
    } catch (error) {
        console.error(error)
        return false
    }
}

/**
 * Inserts a match(not a teammatch) into the database
 * 
 * @param match_key - The match key of the match being inserted
 * @param event_key - The event key of the event the match took place during
 * @returns A promise of if it succeeded or not
 */
export async function insertMatch(
    match_key: MatchKey,
    event_key: EventKey 
): Promise<boolean> {
    
        if (!use_db) return true

    try {
        await db.query(
            `
  INSERT INTO Matches (match_key, event_key)
  VALUES (?, ?)`,
            [match_key, event_key]
        )

        return true
    } catch (error) {
        console.error(error)
        return false
    }
}

/**
 * Inserts a single team into the database
 * 
 * @param team_key - The key of the team being inserted (eg. frc1540)
 * @param nickname - The nickname of the team (eg. The Flaming Chickens)
 * @param team_number - The number of the team (eg. 1540)
 * @param website - The website url of the team (eg. team1540.org)
 * @returns A promise of if the insertion succeeded
 */
export async function insertTeam(
    team_key: TeamKey,
    nickname: string,
    team_number: number,
    website: string
): Promise<boolean> {
    if (!use_db
    ) return true

    try {
        await db.query(
            `
  INSERT INTO Teams (team_key, nickname, team_number, website)
  VALUES (?,?,?,?)`,
            [team_key, nickname, team_number, website]
        )

        return true
    } catch (error) {
        console.error(error)
        return false
    }
}

/**
 * 
 * @param match_key - The key of the match being scouted
 * @param team_key - The key of the team being scouted
 * @param team_data - The data for how well the team performed during this match
 * @returns A promise of if the insertion succeeded
 */
export async function insertTeamMatch(
    match_key: MatchKey,
    team_key: TeamKey,
    team_data: TeamMatch
): Promise<boolean> {
	if (!use_db) return true

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
        )

        return true
    } catch (error) {
        console.error(error)
        return false
    }
}

/**
 * Inserts a single cycle time into the database
 * 
 * @param time - The time the it took for a robot to grab a piece score it, then return to the loading zone
 * @param team_key - The key of the team whose cycle was being tracked
 * @param match_key - The match that the cycle was recorded during
 * @returns A promise of if the insertion succeeded
 */
export async function insertCycleTime(
    time: number,
    team_key: TeamKey,
    match_key: MatchKey
): Promise<boolean> {
    if (!use_db
    ) return true

    try {
        await db.query(
            `
  INSERT INTO CycleTimes (time, team_key, match_key)
  VALUES (?,?,?)`,
            [time, team_key, match_key]
        )

        return true
    } catch (error) {
        console.error(error)
        return false
    }
}

/**
 * Inserts a single defense time into the database
 * 
 * @param time - The time the robot was intentionally preventing another robot from playing optimatlly
 * @param team_key - The key of the team being scouted
 * @param match_key - The match that the defense was recorded in
 * @returns A promise of if the insertion succeeded
 */
export async function insertDefenseTime(
    time: number,
    team_key: TeamKey,
    match_key: MatchKey
): Promise<boolean> {
    if (!use_db
    ) return true

    try {
        await db.query(
            `
  INSERT INTO DefenseTimes (time, team_key, match_key)
  VALUES (?,?,?)`,
            [time, team_key, match_key]
        )

        return true
    } catch (error) {
        console.error(error)
        return false
    }
}

/**
 * 
 * @param event_key - The event the image was taken during
 * @param team_key - The team key of the robot in the image
 * @param url - The url to the image on the server (eg. https://scout.team1540.org/robot-images/02f61f8f-d4fc-495e-a476-3bf53f36bc56.jpeg)
 * @returns A promise of if the insertion succeeded
 */
export async function insertImage(
    event_key: EventKey,
    team_key: TeamKey,
    url: string
): Promise<boolean> {
    if (!use_db
    ) return true

    try {
        await db.query(
            `
  INSERT INTO Images (event_key, team_key, url)
  VALUES (?,?,?)`,
            [event_key, team_key, url]
        )

        return true
    } catch (error) {
        console.error(error)
        return false
    }
}
/**
 * 
 * @param event_key - The event of the pitscouting
 * @param team_key - The key of the team being pitscouted
 * @param pit_data - The data collected about the team and/or robot
 * @returns A promise of if the insertion succeeded
 */
export async function insertPitScoutingData(
  event_key: EventKey,
  team_key: TeamKey,
  pit_data: PitScoutData
): Promise<boolean> {
  if (!use_db) return true;

    try {
        await db.query(
            `
  INSERT INTO PitScouting (event_key, team_key, length, width, drivetrain, slippery_wheels, polish, high_left, high_center, high_right, mid_left, mid_center, mid_right, low_left, low_center, low_right, automation, est_cycle_time, notes, intake_cube_floor, intake_cone_floor_upright, intake_cone_floor_fallen, intake_cube_portal, intake_cone_portal, intake_cube_shelf, intake_cone_shelf)
  VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
            [
                event_key,
                team_key,
                pit_data.length,
                pit_data.width,
                pit_data.drivetrain,
                pit_data.slippery_wheels,
                pit_data.polish,
                pit_data.high_left,
                pit_data.high_center,
                pit_data.high_right,
                pit_data.mid_left,
                pit_data.mid_center,
                pit_data.mid_right,
                pit_data.low_left,
                pit_data.low_center,
                pit_data.low_right,
                pit_data.automation,
                pit_data.est_cycle_time,
                pit_data.notes,
                pit_data.intake_cube_floor,
                pit_data.intake_cone_floor_upright,
                pit_data.intake_cone_floor_fallen,
                pit_data.intake_cube_portal,
                pit_data.intake_cone_portal,
                pit_data.intake_cube_shelf,
                pit_data.intake_cone_shelf
            ]
        )

        return true
    } catch (error) {
        console.error(error)
        return false
    }
}
/**
 * Gets the match scouting data for a specific robot during a specific match
 * @param match_key - The match being scouted
 * @param team_key - The team being scouted during the match
 * @returns A promise of either the robot data for that match, or null
 */
export async function getTeamMatch(
    match_key: MatchKey,
    team_key: TeamKey
): Promise<TeamMatch | null> {
    if (!use_db
    )
        return Promise.resolve({
            broke: false,
            died: false,
            notes: 'these are notes',
            skill: 3,
            auto_charge_station: 0,
            end_charge_station: 0,
            auto_high_left_succeed: 0,
            auto_high_center_succeed: 1,
            auto_high_right_succeed: 0,
            auto_mid_left_succeed: 0,
            auto_mid_center_succeed: 0,
            auto_mid_right_succeed: 0,
            auto_low_left_succeed: 0,
            auto_low_center_succeed: 0,
            auto_low_right_succeed: 0,
            auto_high_left_fail: 1,
            auto_high_center_fail: 0,
            auto_high_right_fail: 0,
            auto_mid_left_fail: 1,
            auto_mid_center_fail: 0,
            auto_mid_right_fail: 0,
            auto_low_left_fail: 0,
            auto_low_center_fail: 0,
            auto_low_right_fail: 0,
            tele_high_left_succeed: 1,
            tele_high_center_succeed: 0,
            tele_high_right_succeed: 3,
            tele_mid_left_succeed: 0,
            tele_mid_center_succeed: 0,
            tele_mid_right_succeed: 1,
            tele_low_left_succeed: 0,
            tele_low_center_succeed: 0,
            tele_low_right_succeed: 0,
            tele_high_left_fail: 0,
            tele_high_center_fail: 2,
            tele_high_right_fail: 0,
            tele_mid_left_fail: 0,
            tele_mid_center_fail: 0,
            tele_mid_right_fail: 0,
            tele_low_left_fail: 0,
            tele_low_center_fail: 1,
            tele_low_right_fail: 0,
        } as TeamMatch)

    try {
        const [rows] = await db.query(
            `
  SELECT * FROM TeamMatches WHERE match_key = ? AND team_key = ?`,
            [match_key, team_key]
        )

        return rows[0] ?? null
    } catch (error) {
        console.error(error)
        return null
    }
}

export async function getEvent(event_key: EventKey): Promise<TeamEvent | null> {
    if (!use_db)
        return Promise.resolve({
            id: 1,
            team_key: 'frc1540',
            event_key: '1540test',
        } as TeamEvent)

    try {
        const [rows] = await db.query(
            `SELECT * FROM Events WHERE event_key = ?`,
            [event_key]
        )

        return rows[0] ?? null
    } catch (error) {
        console.error(error)
        return null
    }
}

export async function getTeam(team_key: TeamKey): Promise<Team | null> {
    if (!use_db)
        return Promise.resolve({
            team_key: 'frc1540',
            nickname: 'Team 1540',
            team_number: 1540,
            website: 'team1540.org',
        } as Team)
    try {
        const [rows] = await db.query(
            `SELECT * FROM Teams WHERE team_key = ?`,
            [team_key]
        )

        return rows[0] ?? null
    } catch (error) {
        console.error(error)
        return null
    }
}

export async function getTeams(): Promise<Team[] | null> {
    if (!use_db)
        return Promise.resolve([
            {
                team_key: 'frc1540',
                nickname: 'Team 1540',
                team_number: 1540,
                website: 'team1540.org',
            },
            {
                team_key: 'frc1425',
                nickname: 'Team 1425',
                team_number: 1425,
                website: 'team1425.org',
            },
        ] as Team[])
    try {
        const [rows] = await db.query(`SELECT * FROM Teams`)

        return rows ?? null
    } catch (error) {
        console.error(error)
        return null
    }
}