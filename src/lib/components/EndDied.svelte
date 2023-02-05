<script lang="ts">
    import { died } from "$lib/matchScoutStores";
    import Switch from "svelte-switch";

    let checkedValue = false;
    function handleChange() {
        checkedValue = !checkedValue;
        died.set(checkedValue)
    }

</script>

<h1 class="text-blue-500 text-center">EndDied</h1>
<div class="flex justify-center">
    <Switch on:change={handleChange} offColor = {"#9be7f2"} onColor = {"#9be7f2"}/>
</div>