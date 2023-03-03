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
export const intake: Writable<boolean[]> = writable([])
export const automation: Writable<number> = writable(0)
export const est_cycle_time: Writable<number> = writable(0)
export const notes: Writable<string> = writable('')

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
    intake,
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
