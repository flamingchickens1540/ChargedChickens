<script lang="ts">
    import { get } from "svelte/store";
    import { pit_scout_stores } from "$lib/stores/pitScoutStores";
    import { APPKEY } from "$lib/stores/generalStores";
    import { event_key, team_key } from "$lib/stores/pitScoutStores"
    import type { PitScoutData } from "$lib/types";

    /**
     * Iterates through all matchScoutStores and puts them into a JSON Object
     * Then it makes a POST request to the backend, which stores the match data
     *
     * @complete
     */
    async function submit() {
        let data: PitScoutData = {
          length: 0,
          width: 0,
          drivetrain: 0,
          slippery_wheels: false,
          polish: 0,
          intake: 0,
          automation: 0,
          est_cycle_time: 0,
          notes: "",
          high_left: false,
          high_center: false,
          high_right: false,
          mid_left: false,
          mid_center: false,
          mid_right: false,
          low_left: false,
          low_center: false,
          low_right: false,
        };

        Object.keys($pit_scout_stores).map((key) => {
            // @ts-ignore
            data[key] = get($pit_scout_stores[key]);
        });

        console.log(Object.keys(data).length);

        fetch("/api/submit/pit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "passphrase": localStorage.getItem("passphrase") || "",
                "APPKEY": $APPKEY,
            },
            body: JSON.stringify({"event_key": $event_key, "team_key": $team_key, data}),
        })
            .then(() => location.reload());
    }
</script>

<div class="flex flex-col items-center">
    <button class="text-red-600 text-lg p-2 rounded bg-yellow-300" on:click={submit}>Submit</button>
</div>
