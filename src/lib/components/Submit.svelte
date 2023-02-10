<script lang="ts">
    import { get } from "svelte/store";
    import { team_matches_stores } from "$lib/matchScoutStores";
    import { confetti } from "@neoconfetti/svelte";
    import { tick } from "svelte";
    import FancyButtons from "./FancyButtons.svelte";
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
        let data = {};
        isVisible = true;
        hasSumbit = true;

        Object.keys(team_matches_stores).map((key) => {
            // @ts-ignore
            data[key] = get(team_matches_stores[key]);
        });

        console.log(Object.keys(data).length);

        fetch("/api/submit/match", {
            method: "POST",
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
    }
</script>

<div class="flex flex-col items-center">
    <FancyButtons
        text={"Submit :D"}
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
    <div class="downButtons">
        {#if hasSumbit == true}
        <FancyButtons
            on:click={async () => {
                isVisible = false;
                await tick();
                isVisible = true;
            }}
            text={"Go Ahead And Click This For More Confetti :D Your Welcome -David :D"}
            bgColor={"#39c41f"}
            fontSize={"11px"}
        />
        {/if}
    </div>
</div>
