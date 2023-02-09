<script lang="ts">
    import { broke } from "$lib/matchScoutStores";
    import Switch from "./Switch.svelte";

    let broken = false;
    
    broke.set(broken);
    
</script>

<h1 class="text-yellow-400 text-center">EndBroke</h1>
<div class="flex justify-center">
    <Switch bind:checked={broken} />
</div>