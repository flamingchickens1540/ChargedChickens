import type { EventKey, TeamKey } from '$lib/types'
import { writable, type Writable } from 'svelte/store'

export const event_key: Writable<EventKey> = writable()
export const team_key: Writable<TeamKey> = writable()

//stores for pit scouting
export const length: Writable<number> = writable(0)
export const width: Writable<number> = writable(0)
export const drivetrain: Writable<number> = writable(0)
export const slippery_wheels: Writable<boolean> = writable(false)
export const polish: Writable<number> = writable(0)
export const automation: Writable<number> = writable(0)
export const est_cycle_time: Writable<number> = writable(0)
export const notes: Writable<string> = writable('')
export const intake_cube_floor: Writable<boolean> = writable(false)
export const intake_cone_floor_upright: Writable<boolean> = writable(false)
export const intake_cone_floor_fallen: Writable<boolean> = writable(false)
export const intake_cube_portal: Writable<boolean> = writable(false)
export const intake_cone_portal: Writable<boolean> = writable(false)
export const intake_cube_shelf: Writable<boolean> = writable(false)
export const intake_cone_shelf: Writable<boolean> = writable(false)

//scoring positions
export const high_left: Writable<boolean> = writable(false)
export const high_center: Writable<boolean> = writable(false)
export const high_right: Writable<boolean> = writable(false)
export const mid_left: Writable<boolean> = writable(false)
export const mid_center: Writable<boolean> = writable(false)
export const mid_right: Writable<boolean> = writable(false)
export const low_left: Writable<boolean> = writable(false)
export const low_center: Writable<boolean> = writable(false)
export const low_right: Writable<boolean> = writable(false)

export const pit_scout_stores = writable({
    length,
    width,
    drivetrain,
    slippery_wheels,
    polish,
    intake_cube_floor,
    intake_cone_floor_upright,
    intake_cone_floor_fallen,
    intake_cube_portal,
    intake_cone_portal,
    intake_cube_shelf,
    intake_cone_shelf,
    automation,
    est_cycle_time,
    notes,
    high_left,
    high_center,
    high_right,
    mid_left,
    mid_center,
    mid_right,
    low_left,
    low_center,
    low_right,
})
