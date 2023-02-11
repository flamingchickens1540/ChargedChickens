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


/**
 * Creates and schedules a new match given a match id and time.
 * THen it inserts the event into the database
 * 
 * @param time 
 * @param id 
 * 
 * @todo
 * - Write match constructor call
 * - Write SQL insertion
 */
function scheduleMatch(time : number, id : number) {
    console.log(time);
}


/**
 * Removes a match from the database
 * 
 * @param id 
 * 
 * @todo
 * - Write SQL removal
 */
function removeMatch(id : number) {
    console.log(id);
}

/**
 * Returns the next match
 * 
 * @returns Either the next match in the schedule, or null if there aren't any other matches left in the queue.
 * 
 * @todo
 * - Write SQL query
 */
function getNextMatch() : Match | null {
    return null;
}