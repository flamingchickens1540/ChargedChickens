<script lang="ts">
    import { get } from "svelte/store";
    import { stores } from "$lib/matchScoutStores";

    async function submit() {
        let data = {};

        Object.keys(stores).map((key) => {
            // @ts-ignore
            data[key] = get(stores[key]);
        });

        fetch("/match-scout/submit", {
            method: "POST",
            body: JSON.stringify(data),
        }).then(res => res.json()).then(data => console.log(data));
    }

</script>

<div class="flex flex-col items-center">
    <button class="rounded-full bg-green-500 p-8 m-4" on:click={submit}>Submit</button>
</div>
