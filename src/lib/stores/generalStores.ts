import { writable, type Writable } from "svelte/store";

export const DEBUG: Writable<boolean> = writable(false);