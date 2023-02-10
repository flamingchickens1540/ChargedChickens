<script lang="ts">
    import { get } from "svelte/store";
    import { team_matches_stores } from "$lib/matchScoutStores";
    import { confetti } from "@neoconfetti/svelte";
    import { tick } from "svelte";
    import FancyButtons from "./FancyButtons.svelte";
    let isVisible = false;
    let submitVisible = false;
    let makeClickyVisible = false;

    async function submit() {
        submitVisible = true;
        let data = {};

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
    <div class = "downButtons"> 
    <FancyButtons
        on:click={async () => {
            isVisible = false;
            await tick();
            isVisible = true;
        }}
        text={"More Confetti :D \n Your Welcome \n -David :D"}
        bgColor={"#39c41f"}
        fontSize={"11px"}
    />
    </div>

</div>
