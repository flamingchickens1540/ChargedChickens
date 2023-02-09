<script lang="ts">
    import { died } from "$lib/matchScoutStores";
    import Switch from "./Switch.svelte";

    let checkedValue = false;
    function handleChange() {
        checkedValue = !checkedValue;
        died.set(checkedValue)
    }

</script>

<h1 class="text-blue-500 text-center">EndDied</h1>

<div class="flex justify-center">
    <Switch bind:checked={checkedValue}/>
</div>
