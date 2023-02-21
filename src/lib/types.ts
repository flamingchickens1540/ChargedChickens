export type TeamKey = `frc${number}`;

export type MatchKey = `${EventKey}_${"qm" | "qf" | "sf" | "f"}${number}`;

export type EventKey = `${number}${string}`;

export type CycleTime = {
    id?: number,
    time: number,
    team: TeamKey,
    match: MatchKey,
}

export type DefenseTime = {
    id?: number,
    time: number,
    team: TeamKey,
    match: MatchKey,
}

export type TeamMatch = {
    broke: boolean,
    died: boolean,
    notes: string,
    skill: number,
    auto_charge_station: number,
    end_charge_station: number,
    auto_high_left_succeed: number,
    auto_high_center_succeed: number,
    auto_high_right_succeed: number,
    auto_mid_left_succeed: number,
    auto_mid_center_succeed: number,
    auto_mid_right_succeed: number,
    auto_low_left_succeed: number,
    auto_low_center_succeed: number,
    auto_low_right_succeed: number,
    auto_high_left_fail: number,
    auto_high_center_fail: number,
    auto_high_right_fail: number,
    auto_mid_left_fail: number,
    auto_mid_center_fail: number,
    auto_mid_right_fail: number,
    auto_low_left_fail: number,
    auto_low_center_fail: number,
    auto_low_right_fail: number,
    tele_high_left_succeed: number,
    tele_high_center_succeed: number,
    tele_high_right_succeed: number,
    tele_mid_left_succeed: number,
    tele_mid_center_succeed: number,
    tele_mid_right_succeed: number,
    tele_low_left_succeed: number,
    tele_low_center_succeed: number,
    tele_low_right_succeed: number,
    tele_high_left_fail: number,
    tele_high_center_fail: number,
    tele_high_right_fail: number,
    tele_mid_left_fail: number,
    tele_mid_center_fail: number,
    tele_mid_right_fail: number,
    tele_low_left_fail: number,
    tele_low_center_fail: number,
    tele_low_right_fail: number,
}

export type TeamEvent = {
    id?: number,
    team_key: TeamKey,
    event_key: EventKey,
}

export type Team = {
    team_key: TeamKey,
    nickname: string,
    team_number: number,
    website: string,
    // logo: string | undefined,
    // details : string
}

export type Match = {
    match_key: MatchKey,
    event_key: EventKey,
}

export type PitScouting = {
    id?: number,
    team_key: TeamKey,
    event_key: EventKey,
    width: number,
    length: number,
    drive_train: number,
    polish: number,
    notes: string,
}

export type LoginData = {
    name: string,
    password: string
}

export type Robot = {
    "team_key": TeamKey,
    "alliance": "red" | "blue",
}

export type RobotMatch = {
    "robot": Robot,
    "match": Match,
}

export type AssignData = {
    "event_key": EventKey,
    "match_key": MatchKey,
    "robots": {
        "red": TeamKey[],
        "blue": TeamKey[],
    }
}

export type MatchScoutInfo = {
    success: boolean,
    robot?: Robot,
    match?: Match,
}

export type RGB = {
    red: number,
    green: number,
    blue: number
}