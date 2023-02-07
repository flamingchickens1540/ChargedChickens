<script lang="ts">
    import { broke } from "$lib/matchScoutStores";
    import Switch from "./Switch.svelte";

    let checkedValue = false;
    
    broke.set(checkedValue)
    
</script>

<h1 class="text-yellow-400 text-center">EndBroke</h1>
<div class="flex justify-center">
    <Switch bind:checked={checkedValue} />
</div>