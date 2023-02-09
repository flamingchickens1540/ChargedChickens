// I'm not sure if this is the place to put this
import type { Match } from "./types";

class MatchEvent {
    matchId : number;
    matchTime : number;

    constructor(time : number, id : number) {
        this.matchId = id;
        this.matchTime = time;
    }
}

function scheduleMatch(time : number, id : number) {
    console.log(time);
}

function removeMatch(id : number) {
    console.log(id);
}

function getNextMatch() : Match | null {
    return null;
}