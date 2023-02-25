<script lang="ts">
    import { auto_community } from "$lib/stores/matchScoutStores";
    import Switch from "$lib/components/ui-components/Switch.svelte";

    let checkedValue = false;

    function clickHandle() {
        //!checkedValue is used because onclick is triggered before the bind
        auto_community.set(!checkedValue);
    }
</script>

<h1 class="text-yellow-400 text-center">AutoCommunity</h1>

<div class="flex justify-center">
    <Switch bind:checked={checkedValue} on:click={clickHandle}/>
</div>
