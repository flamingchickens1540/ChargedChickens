<script lang="ts">
    import { auto_community } from "$lib/stores/matchScoutStores";
    import SwitchToggle from "../ui-components/SwitchToggle.svelte"

</script>

<SwitchToggle bind:checked={$auto_community} name="Auto Community"></SwitchToggle>