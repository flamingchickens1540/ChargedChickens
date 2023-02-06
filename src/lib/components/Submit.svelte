<script lang="ts">
    import { get } from "svelte/store";
    import { team_matches_stores } from "$lib/matchScoutStores";

    async function submit() {
        let data = {};

        Object.keys(team_matches_stores).map((key) => {
            // @ts-ignore
            data[key] = get(team_matches_stores[key]);
        });

        console.log(Object.keys(data).length);

        fetch("/api/submit/match", {
            method: "POST",
            body: JSON.stringify(data),
        }).then(res => res.json()).then(data => console.log(data));
    }

</script>

<div class="flex flex-col items-center">
    <button class="rounded-full bg-green-500 p-8 m-4" on:click={submit}>Submit</button>
</div>
