<script lang="ts">
    import { auto_community } from "$lib/stores/matchScoutStores";
    import Switch from "$lib/components/ui-components/Switch.svelte";

</script>


<div class="grid grid-rows-2 grid-cols-1 place-items-center">
    <h1 class="text-purple-500 text-center">AutoCommunity</h1>
    <Switch bind:checked={$auto_community}/>
</div>
