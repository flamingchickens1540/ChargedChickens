import { writable, type Writable } from "svelte/store";

//stores for pit scouting
export const length: Writable<number> = writable(0);
export const width: Writable<number> = writable(0);
export const drivetrain: Writable<number> = writable(0);
export const slippery_wheels: Writable<boolean> = writable(false);
export const polish: Writable<number> = writable(0);
export const intake: Writable<number> = writable(0);
export const automation: Writable<number> = writable(0);
export const est_cycle_time: Writable<number> = writable(0);
export const notes: Writable<string> = writable("");

//scoring positions
export const high_left: Writable<boolean> = writable(false);
export const high_center: Writable<boolean> = writable(false);
export const high_right: Writable<boolean> = writable(false);
export const mid_left: Writable<boolean> = writable(false);
export const mid_center: Writable<boolean> = writable(false);
export const mid_right: Writable<boolean> = writable(false);
export const low_left: Writable<boolean> = writable(false);
export const low_center: Writable<boolean> = writable(false);
export const low_right: Writable<boolean> = writable(false);