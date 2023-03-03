import { writable, type Writable } from "svelte/store";

export const admin: Writable<boolean> = writable(false);

export const login: Writable<boolean> = writable(true);

export const DEBUG: Writable<boolean> = writable(false);