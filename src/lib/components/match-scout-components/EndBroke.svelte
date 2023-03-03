<script lang="ts">
    import { broke } from "$lib/stores/matchScoutStores";
    import SwitchToggle from "$lib/components/ui-components/SwitchToggle.svelte"
</script>

<SwitchToggle bind:checked={$broke} name="Is Broken"></SwitchToggle>