import { readable, writable, type Readable, type Writable } from "svelte/store";
export const DEBUG: Writable<boolean> = writable(false);
export const APPKEY: Readable<string> = readable("afdsi94ewhqw8hyp987943q8792th39quwefahiodfj");