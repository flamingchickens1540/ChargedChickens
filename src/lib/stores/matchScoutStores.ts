import { writable, type Writable } from 'svelte/store'

export const team_number: Writable<string | undefined> = writable("");

//stores for match scouting
export const broke: Writable<boolean> = writable(false)
export const died: Writable<boolean> = writable(false)
export const notes: Writable<string> = writable('')
export const skill: Writable<number> = writable(0)
export const cycle_times: Writable<number[]> = writable([])
export const defense_times: Writable<number[]> = writable([])
export const auto_community: Writable<boolean> = writable(false)
export const auto_charge_station: Writable<number> = writable(0)
export const end_charge_station: Writable<number> = writable(0)

//auto succeed
export const auto_high_left_succeed: Writable<number> = writable(0)
export const auto_high_center_succeed: Writable<number> = writable(0)
export const auto_high_right_succeed: Writable<number> = writable(0)
export const auto_mid_left_succeed: Writable<number> = writable(0)
export const auto_mid_center_succeed: Writable<number> = writable(0)
export const auto_mid_right_succeed: Writable<number> = writable(0)
export const auto_low_left_succeed: Writable<number> = writable(0)
export const auto_low_center_succeed: Writable<number> = writable(0)
export const auto_low_right_succeed: Writable<number> = writable(0)

//auto fail
export const auto_high_left_fail: Writable<number> = writable(0)
export const auto_high_center_fail: Writable<number> = writable(0)
export const auto_high_right_fail: Writable<number> = writable(0)
export const auto_mid_left_fail: Writable<number> = writable(0)
export const auto_mid_center_fail: Writable<number> = writable(0)
export const auto_mid_right_fail: Writable<number> = writable(0)
export const auto_low_left_fail: Writable<number> = writable(0)
export const auto_low_center_fail: Writable<number> = writable(0)
export const auto_low_right_fail: Writable<number> = writable(0)

//tele succeed
export const tele_high_left_succeed: Writable<number> = writable(0)
export const tele_high_center_succeed: Writable<number> = writable(0)
export const tele_high_right_succeed: Writable<number> = writable(0)
export const tele_mid_left_succeed: Writable<number> = writable(0)
export const tele_mid_center_succeed: Writable<number> = writable(0)
export const tele_mid_right_succeed: Writable<number> = writable(0)
export const tele_low_left_succeed: Writable<number> = writable(0)
export const tele_low_center_succeed: Writable<number> = writable(0)
export const tele_low_right_succeed: Writable<number> = writable(0)

//tele fail
export const tele_high_left_fail: Writable<number> = writable(0)
export const tele_high_center_fail: Writable<number> = writable(0)
export const tele_high_right_fail: Writable<number> = writable(0)
export const tele_mid_left_fail: Writable<number> = writable(0)
export const tele_mid_center_fail: Writable<number> = writable(0)
export const tele_mid_right_fail: Writable<number> = writable(0)
export const tele_low_left_fail: Writable<number> = writable(0)
export const tele_low_center_fail: Writable<number> = writable(0)
export const tele_low_right_fail: Writable<number> = writable(0)

//object with all auto score stores
export const auto_score = {
    auto_high_left_succeed,
    auto_high_center_succeed,
    auto_high_right_succeed,
    auto_mid_left_succeed,
    auto_mid_center_succeed,
    auto_mid_right_succeed,
    auto_low_left_succeed,
    auto_low_center_succeed,
    auto_low_right_succeed,
    auto_high_left_fail,
    auto_high_center_fail,
    auto_high_right_fail,
    auto_mid_left_fail,
    auto_mid_center_fail,
    auto_mid_right_fail,
    auto_low_left_fail,
    auto_low_center_fail,
    auto_low_right_fail,
}

//object with all tele score stores
export const tele_score = {
    tele_high_left_succeed,
    tele_high_center_succeed,
    tele_high_right_succeed,
    tele_mid_left_succeed,
    tele_mid_center_succeed,
    tele_mid_right_succeed,
    tele_low_left_succeed,
    tele_low_center_succeed,
    tele_low_right_succeed,
    tele_high_left_fail,
    tele_high_center_fail,
    tele_high_right_fail,
    tele_mid_left_fail,
    tele_mid_center_fail,
    tele_mid_right_fail,
    tele_low_left_fail,
    tele_low_center_fail,
    tele_low_right_fail,
}

//object with all stores
export const team_matches_stores = {
    broke,
    died,
    notes,
    skill,
    auto_community,
    auto_charge_station,
    end_charge_station,
    auto_high_left_succeed,
    auto_high_center_succeed,
    auto_high_right_succeed,
    auto_mid_left_succeed,
    auto_mid_center_succeed,
    auto_mid_right_succeed,
    auto_low_left_succeed,
    auto_low_center_succeed,
    auto_low_right_succeed,
    auto_high_left_fail,
    auto_high_center_fail,
    auto_high_right_fail,
    auto_mid_left_fail,
    auto_mid_center_fail,
    auto_mid_right_fail,
    auto_low_left_fail,
    auto_low_center_fail,
    auto_low_right_fail,
    tele_high_left_succeed,
    tele_high_center_succeed,
    tele_high_right_succeed,
    tele_mid_left_succeed,
    tele_mid_center_succeed,
    tele_mid_right_succeed,
    tele_low_left_succeed,
    tele_low_center_succeed,
    tele_low_right_succeed,
    tele_high_left_fail,
    tele_high_center_fail,
    tele_high_right_fail,
    tele_mid_left_fail,
    tele_mid_center_fail,
    tele_mid_right_fail,
    tele_low_left_fail,
    tele_low_center_fail,
    tele_low_right_fail,
}
