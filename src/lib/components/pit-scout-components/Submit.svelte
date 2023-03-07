<script lang="ts">
    import { get } from "svelte/store";
    import { pit_scout_stores } from "$lib/stores/pitScoutStores";
    import { APPKEY } from "$lib/stores/generalStores";
    import { event_key, team_key } from "$lib/stores/pitScoutStores"
    import type { PitScoutData } from "$lib/types";
    import { confetti } from "@neoconfetti/svelte";
    import FancyButtons from "$lib/components/ui-components/FancyButtons.svelte";

    let isVisible = false;
    let submitVisible = false;
    let hasSumbit = false;

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
          intake_cube_floor: false,
          intake_cone_floor_upright: false,
          intake_cone_floor_fallen: false,
          intake_cube_portal: false,
          intake_cone_portal: false,
          intake_cube_shelf: false,
          intake_cone_shelf: false,
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

        isVisible = true;
        hasSumbit = true;

        Object.keys($pit_scout_stores).map((key) => {
            // @ts-ignore
            data[key] = get($pit_scout_stores[key])
        });

        console.log(Object.keys(data).length)
        if (!localStorage.getItem('event_key')) localStorage.setItem('event_key', $event_key)
        

        fetch("/api/submit/pit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "passphrase": localStorage.getItem("passphrase") || "",
                "APPKEY": $APPKEY,
            },
            body: JSON.stringify({"event_key": localStorage.getItem("event_key") || "", "team_key": $team_key, data}),
        })
            .then((res) => res.json())
            .then((data) => {if (data.success) location.reload()})
    }
</script>

<div class="flex flex-col items-center">
    <FancyButtons
        text={"Submit"}
        on:click={submit}
        bgColor={"#39c41f"}
        fontSize={"47px"}
    />
    {#if submitVisible}
        <div>
            <div use:confetti />
        </div>
    {/if}
    {#if isVisible}
        <div>
            <div use:confetti />
        </div>
    {/if}
    
</div>
