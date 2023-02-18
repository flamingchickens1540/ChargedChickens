import { writable, type Writable } from "svelte/store";
import type { MatchScoutInfo } from "$lib/types";

export const DEBUG: Writable<boolean> = writable(false);

export const user: Writable<string> = writable("Anon");

export const info: Writable<MatchScoutInfo> = writable(
  {
    success: false,
  })