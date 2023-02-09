// I'm not sure if this is the place to put this
import type { Match } from "./types";

function scheduleMatch(time : number, id : number) {
    console.log(time);
}

function removeMatch(id : number) {
    console.log(id);
}

function getNextMatch() : Match | null {
    return null;
}