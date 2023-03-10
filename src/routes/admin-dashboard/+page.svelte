<script lang="ts">
    import type { AssignData, EventKey, MatchKey, TeamKey } from '$lib/types';
    import { APPKEY } from "$lib/stores/generalStores";
    
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
            event_key: match_key.split("_")[0] as EventKey,
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
        robots.forEach(robot => new_robots.push(`frc${robot.replace(/\s/g, "") as unknown as number}` as TeamKey));
        return new_robots;
    }
    
    /**
     * POSTs the match data to the api/assign endpoint
     * 
     * @param match
     */
    async function sendMatch(match: AssignData) {
        fetch('/api/admin/assign', {
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
        fetch('/api/admin/authed', {
            method:"POST",
            body:JSON.stringify({password:inputPassword}),
            headers : {
                passphrase: localStorage.getItem("passphrase") || "",
                APPKEY: $APPKEY
            }
        }).then(res => res.json()).then(data => 
            (document.getElementById("auth") as HTMLElement).style.background = data.success ? "yellow" : ""
        );
        inputPassword = "";
    }
</script>
<br>
<div class="grid grid-rows-1 grid-cols-2 text-center">

    <div class="p-4 col-span-2 grid grid-rows-1 grid-cols-1 outline">
        <h1 class="text-center text-3xl text-blue-600"><strong> Welcome Admin </strong></h1>
    </div>

    <div class="p-10 grid grid-cols-1 grid-rows-2 gap-5 place-self-center outline">
        <h1 class="text-blue-600"><strong> Blue Robots </strong></h1>
        <input type="text" bind:value={robots_blue[0]}>
        <input type="text" bind:value={robots_blue[1]}>
        <input type="text" bind:value={robots_blue[2]}>
    </div>

    <div class="p-10 grid grid-cols-1 grid-rows-2 gap-5 place-self-center outline">
        <h1 class="text-red-500"><strong> Red Robots </strong></h1>
        <input type="text" bind:value={robots_red[0]}>
        <input type="text" bind:value={robots_red[1]}>
        <input type="text" bind:value={robots_red[2]}>
    </div>
</div>

<div class="grid grid-rows-1 grid-cols-2 text-center">

    <div class="p-4 grid grid-cols-1 grid-rows-2 gap-5 place-items-center outline">
        <label class="text-blue-600" for="match_key"><strong> Match Key </strong></label>
        <input type="text" name="match_key" bind:value={match_key}>
    </div>

    <div class="h-24 grid grid-cols-1 grid-rows-1 place-items-center outline ">
        <button class="h-14 lg:flex-grow sm:flex-shrink text-red-600 text-lg p-4 rounded bg-yellow-300 outline" on:click={autoPopulate}> Auto-Populate </button>
    </div>

    <div class="grid grid-cols-1 grid-rows-2 place-items-center outline">
        <strong><p class="text-blue-600">Last Created Match</p></strong>
        <strong><p class="text-blue-600">{lastCreatedMatch}</p></strong>
    </div>

    <div class="h-24 grid grid-cols-1 grid-rows-1 place-items-center outline">
        <button class="h-14 text-red-600 text-lg p-4 rounded bg-yellow-300 outline" on:click={createMatch}> Create Match </button>
    </div>
    
    <div class="h-36 grid grid-cols-1 grid-rows-2 place-items-center outline">
        <input type="text" bind:value={event_key}>
        <button class="h-14 text-red-600 text-lg p-4 rounded bg-yellow-300 outline" on:click={() => createEvent()}> Create Event </button>
    </div>

    <!-- Finish await -->
    <!-- {#await } -->
        <div class="h-36 grid grid-cols-1 grid-rows-2 place-items-center outline">
            <input type="text" bind:value={inputPassword}>
            <button class="h-14 text-red-600 text-lg p-4 rounded bg-yellow-300 outline" on:click={() => setPassword()}> Auth </button>
        </div>
    <!-- {:then }  -->
        <!-- <div class="h-36 grid grid-cols-1 grid-rows-2 place-items-center outline">
            <input type="text" bind:value={inputPassword}>
            <button class="h-14 text-green-600 text-lg p-4 rounded bg-yellow-300 outline" on:click={() => setPassword()}> Auth </button>
        </div>
    {/await} -->
    


</div>

<style>

    button {
        color: rgb(255, 255, 255);
        background-color: rgb(240, 60, 60);
        outline-color:rgb(240, 60, 60, .3);
    }
   
    div {
        background-color: #313639;
    }

    input {
        background-color: darkgrey;
    }

</style>