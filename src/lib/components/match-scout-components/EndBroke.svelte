<script lang="ts">
    import { broke } from "$lib/stores/matchScoutStores";
    import SwitchToggle from "../ui-components/SwitchToggle.svelte"
</script>

<SwitchToggle bind:checked={$broke} name="Is Broken"></SwitchToggle>

