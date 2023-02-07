import { type Writable, writable } from "svelte/store";

export const admin: Writable<boolean> = writable(false);
export const login: Writable<boolean> = writable(false);