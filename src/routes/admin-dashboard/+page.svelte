<script lang="ts">
    import { user } from "../../lib/stores/generalStores";
    import type { AssignData, MatchKey, Team, TeamKey } from '../../lib/types';
    import { redirect } from '@sveltejs/kit';
    import { APPKEY } from "$lib/generalStores";
    let match_key: string = '';
    let robots_red: string[] = [];
    let robots_blue: string[] = [];
    
    /**
     * Creates a new match
     * 
     * @params e: on:click event
    */
    async function createMatch(e: any) {
        let rr = parseRobots(robots_red);
        let rb = parseRobots(robots_blue);
        
        let match: AssignData = {
            event_key: '2023test',
            match_key: match_key as MatchKey,
            robots:  {
                red: rr,
                blue: rb
            }
        }
        sendMatch(match);
    }

    /**
     * Formats arrays strings into arrays of teamkeys
     * 
     * @param robots - An array of teamkeys, in the form of strings
     * 
     * @returns An array of TeamKeys
     */
    function parseRobots(robots:string[]): TeamKey[] {
        let new_robots: TeamKey[] = [];
        robots.forEach(robot => new_robots.push(`frc${robot as unknown as number}` as TeamKey));
        return new_robots;
    }
    
    /**
     * POSTs the match data to the api/assign endpoint
     * 
     * @param match
     */
    async function sendMatch(match: AssignData) {

        fetch('/api/assign', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                passphrase: localStorage.getItem("passphrase") || "",
                APPKEY: $APPKEY
            },
            body: JSON.stringify(match)
        })
            .then(res => res.json())
            .then(data => console.log(data));
    }
</script>

<h1 class="text-center text-3xl">Welcome {$user}</h1>
<br>
<div class="grid grid-cols-2 grid-row-2 text-center">

    <div class="p-10 grid grid-cols-1 grid-rows-2 gap-5 place-self-center border-4">
        <h1 class="text-blue-600">Blue Robots</h1>
        <input type="text" class="border" bind:value={robots_blue[0]}>
        <input type="text" class="border" bind:value={robots_blue[1]}>
        <input type="text" class="border" bind:value={robots_blue[2]}>
    </div>

    <div class="p-10 grid grid-cols-1 grid-rows-2 gap-5 place-self-center border-4">
        <h1>Red Robots</h1>
        <input type="text" class="border" bind:value={robots_red[0]}>
        <input type="text" class="border" bind:value={robots_red[1]}>
        <input type="text" class="border" bind:value={robots_red[2]}>
    </div>

    <div class="p-10 grid grid-cols-1 grid-rows-2 gap-5 place-items-center border-4">
        <label for="matchKey">Match Key</label>
        <input type="text" class="border" name="matchKey" bind:value={match_key}>
    </div>
    <div class="grid grid-cols-1 grid-rows-1 place-items-center border-4">
        <button class="h-36 w-36 lg:flex-grow sm:flex-shrink rounded-full outline outline-10" on:click={createMatch}>Create Match</button>
    </div>
</div>

<style>
    button {
        color: rgb(255, 255, 255);
        background-color: rgb(118, 218, 99);
        outline-color:rgb(118, 218, 99, .3);
    }
    h1 {
        color: rgb(280, 30, 30);
    }
</style>