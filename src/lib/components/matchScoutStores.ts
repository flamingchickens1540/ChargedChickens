import { writable, type Writable } from "svelte/store";

//stores for match scouting
export const broke: Writable<boolean> = writable(false);
export const died: Writable<boolean> = writable(false);
export const notes: Writable<string> = writable("");
export const skill: Writable<number> = writable(0);
export const cycle_times: Writable<number[]> = writable([]);
export const defense_times: Writable<number[]> = writable([]);
export const auto_charge: Writable<number> = writable(0);
export const end_charge: Writable<number> = writable(0);

//auto succeed
export const auto_high_left_succeed: Writable<number> = writable(0);
export const auto_high_center_succeed: Writable<number> = writable(0);
export const auto_high_low_succeed: Writable<number> = writable(0);
export const auto_mid_left_succeed: Writable<number> = writable(0);
export const auto_mid_center_succeed: Writable<number> = writable(0);
export const auto_mid_low_succeed: Writable<number> = writable(0);
export const auto_low_left_succeed: Writable<number> = writable(0);
export const auto_low_center_succeed: Writable<number> = writable(0);
export const auto_low_low_succeed: Writable<number> = writable(0);

//auto fail
export const auto_high_left_fail: Writable<number> = writable(0);
export const auto_high_center_fail: Writable<number> = writable(0);
export const auto_high_low_fail: Writable<number> = writable(0);
export const auto_mid_left_fail: Writable<number> = writable(0);
export const auto_mid_center_fail: Writable<number> = writable(0);
export const auto_mid_low_fail: Writable<number> = writable(0);
export const auto_low_left_fail: Writable<number> = writable(0);
export const auto_low_center_fail: Writable<number> = writable(0);
export const auto_low_low_fail: Writable<number> = writable(0);

//tele succeed
export const tele_high_left_succeed: Writable<number> = writable(0);
export const tele_high_center_succeed: Writable<number> = writable(0);
export const tele_high_low_succeed: Writable<number> = writable(0);
export const tele_mid_left_succeed: Writable<number> = writable(0);
export const tele_mid_center_succeed: Writable<number> = writable(0);
export const tele_mid_low_succeed: Writable<number> = writable(0);
export const tele_low_left_succeed: Writable<number> = writable(0);
export const tele_low_center_succeed: Writable<number> = writable(0);
export const tele_low_low_succeed: Writable<number> = writable(0);

//tele fail
export const tele_high_left_fail: Writable<number> = writable(0);
export const tele_high_center_fail: Writable<number> = writable(0);
export const tele_high_low_fail: Writable<number> = writable(0);
export const tele_mid_left_fail: Writable<number> = writable(0);
export const tele_mid_center_fail: Writable<number> = writable(0);
export const tele_mid_low_fail: Writable<number> = writable(0);
export const tele_low_left_fail: Writable<number> = writable(0);
export const tele_low_center_fail: Writable<number> = writable(0);
export const tele_low_low_fail: Writable<number> = writable(0);