<script lang="ts">
    import { auto_community } from "$lib/stores/matchScoutStores";
    import Switch from "$lib/components/ui-components/Switch.svelte";

</script>

<h1 class="text-yellow-400 text-center">AutoCommunity</h1>

<div class="flex justify-center">
    <Switch bind:checked={$auto_community}/>
</div>
