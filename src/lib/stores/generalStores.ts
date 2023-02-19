import { writable, readable, type Writable, type Readable } from "svelte/store";
import type { MatchScoutInfo } from "$lib/types";

export const DEBUG: Writable<boolean> = writable(false);

export const user: Writable<string> = writable("Anon");

export const info: Writable<MatchScoutInfo> = writable(
  {
    success: false,
  })

export const APPKEY: Readable<string> = readable("afdsi94ewhqw8hyp987943q8792th39quwefahiodfj");