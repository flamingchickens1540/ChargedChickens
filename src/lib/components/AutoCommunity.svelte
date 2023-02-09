<script lang="ts">
    import { auto_community } from "$lib/matchScoutStores";
    import Switch from "./Switch.svelte";

    let checkedValue = false;

    auto_community.set(checkedValue);
</script>

<h1 class="text-yellow-400 text-center">AutoCommunity</h1>


<div class="flex justify-center">
    <Switch bind:checked={checkedValue}/>
</div>