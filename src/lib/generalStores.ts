import { writable, type Writable } from "svelte/store";

export const admin: Writable<boolean> = writable(true);

export const login: Writable<boolean> = writable(true);