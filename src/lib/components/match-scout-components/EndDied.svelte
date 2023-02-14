<script lang="ts">
    import { died } from "$lib/stores/matchScoutStores";
    import Switch from "$lib/components/ui-components/Switch.svelte";

    let checkedValue = false;
    died.set(checkedValue);

</script>

<h1 class="text-blue-500 text-center">Did the Robot Die in the Endgame?</h1>

<div class="flex justify-center">
    <Switch bind:checked={checkedValue}/>
</div>
