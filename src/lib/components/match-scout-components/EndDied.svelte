<script lang="ts">
    import { died } from "$lib/stores/matchScoutStores";
    import SwitchToggle from "../ui-components/SwitchToggle.svelte"
</script>

<SwitchToggle bind:checked={$died} name="Is Dead" stack={true}></SwitchToggle>