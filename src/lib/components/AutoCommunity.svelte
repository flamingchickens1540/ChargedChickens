<script lang="ts">
    import { auto_community } from "$lib/matchScoutStores";
    let yes = false;

    auto_community.update(() => yes);
</script>

<h1 class="text-yellow-400 text-center">AutoCommunity</h1>


<style>
    .active {
        color: #219b0b;
    }
    .inactive {
        color: #f90000;
    }
</style>

<div class="grid grid-flow-row-dense grid-cols-3 grid-rows-3">
    <h1 class:active={yes} class:inactive={!yes} class="text-center">Left Community?</h1>
    <button disabled={yes} on:click={() => yes = !yes} class="outline rounded center">Yes</button>
    <button disabled={!yes} on:click={() => yes = !yes} class="outline rounded center">No</button>
</div>
