<script lang="ts">
    import type { AssignData, MatchKey, TeamKey } from '$lib/types';
    import { APPKEY } from "$lib/stores/generalStores";
    import { team_matches_stores } from '$lib/stores/matchScoutStores';
    import { select_option } from 'svelte/internal';
    
    let match_key: string = '';
    let event_key: string = '';
    let robots_red: string[] = [" ", " ", " "];
    let robots_blue: string[] = [" ", " ", " "];
    let lastCreatedMatch: string = '';
    let inputPassword = "";

    let color = "#76DA63";
    let edgeColor: string = "#76da634d";

    function sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    /**
     * Creates a new match
     * 
     * @params e: on:click event
    */
    async function createMatch(e: any) {
        color = "#000000";
        edgeColor = "#000000";  
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
        await sleep(1000);
        color = "#76DA63";
        edgeColor = "#76da634d";
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
                ADMIN_PASSWORD: localStorage.getItem("ADMIN_PASSWORD") || "",
                APPKEY: $APPKEY
            },
            body: JSON.stringify(match)
        })
            .then(res => res.json())
            .then(data => { if (!data.success) alert("ERROR"); else lastCreatedMatch = match.match_key; });
    }

    function autoPopulate() {
        console.log(match_key)
        fetch('/api/admin/teams', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                passphrase: localStorage.getItem("passphrase") || "",
                ADMIN_PASSWORD: localStorage.getItem("ADMIN_PASSWORD") || "",
                APPKEY: $APPKEY
            },
            body: JSON.stringify({
                match_key: match_key,
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                if (!data.success) alert("ERROR");

                robots_red = [data.red[0].slice(3), data.red[1].slice(3), data.red[2].slice(3)];
                robots_blue = [data.blue[0].slice(3), data.blue[1].slice(3), data.blue[2].slice(3)];

            })
            .catch(err => alert("ERROR"));
    }

    function createEvent() {
        fetch('/api/admin/make-event', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                passphrase: localStorage.getItem("passphrase") || "",
                ADMIN_PASSWORD: localStorage.getItem("ADMIN_PASSWORD") || "",
                APPKEY: $APPKEY
            },
            body: JSON.stringify({
                event_key: event_key,
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                if (!data.success) alert("ERROR");
            })
            .catch(err => alert("ERROR"));
    }

    function setPassword() {
        localStorage.setItem("ADMIN_PASSWORD", inputPassword);
        inputPassword = "";
    }
</script>

<h1 class="text-center text-3xl">Welcome Admin</h1>
<br>
<div class="grid grid-rows-1 grid-cols-2 text-center">

    <div class="p-10 grid grid-cols-1 grid-rows-2 gap-5 place-self-center border-4">
        <h1 class="text-blue-600">Blue Robots</h1>
        <input type="text" class="border" bind:value={robots_blue[0]}>
        <input type="text" class="border" bind:value={robots_blue[1]}>
        <input type="text" class="border" bind:value={robots_blue[2]}>
    </div>

    <div class="p-10 grid grid-cols-1 grid-rows-2 gap-5 place-self-center border-4">
        <h1 class="text-red-600">Red Robots</h1>
        <input type="text" class="border" bind:value={robots_red[0]}>
        <input type="text" class="border" bind:value={robots_red[1]}>
        <input type="text" class="border" bind:value={robots_red[2]}>
    </div>
</div>

<div class="grid grid-rows-1 grid-cols-2 text-center">
    <div class="p-10 grid grid-cols-1 grid-rows-2 gap-5 place-items-center border-4">
        <label for="match_key">Match Key</label>
        <input type="text" class="border" name="match_key" bind:value={match_key}>
    </div>
    <div class="grid grid-cols-1 grid-rows-1 place-items-center border-4">
        <button class="h-36 w-36 lg:flex-grow sm:flex-shrink rounded-full outline outline-10" style="--btn-color:{color}; --btn-edge-color:{edgeColor}" on:click={createMatch}>Create Match</button>
        <p>Last Created Match: {lastCreatedMatch}</p>
    </div>
    <div class="grid grid-cols-1 grid-rows-2 place-items-center border-4">
        <input type="text" bind:value={inputPassword}>
        <button class="text-red-600 text-lg p-2 rounded bg-yellow-300" on:click={() => setPassword()}>AUTH</button>
    </div>  
    <button on:click={autoPopulate}> AUTOPOPULATE </button>
    <div class="grid grid-cols-1 grid-rows-2 place-items-center border-4">
        <input type="text" bind:value={event_key}>
        <button class="text-red-600 text-lg p-2 rounded bg-yellow-300" on:click={() => createEvent()}> create event </button>
    </div>  

</div>

<style>
    button {
        color: rgb(255, 255, 255);
        background-color: rgb(118, 218, 99);
        outline-color:rgb(118, 218, 99, .3);
    }
</style>