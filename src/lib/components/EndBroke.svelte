<script lang="ts">
    import { broke } from "$lib/matchScoutStores";
    import Switch from "svelte-switch";

    let checkedValue = false;
    function handleChange() {
        checkedValue = !checkedValue;
        broke.set(checkedValue)
    }
</script>

<h1 class="text-yellow-400 text-center">EndBroke</h1>
<div class="flex justify-center">
    <Switch on:change={handleChange} offColor = {"#9be7f2"} onColor = {"#9be7f2"}/>
</div>