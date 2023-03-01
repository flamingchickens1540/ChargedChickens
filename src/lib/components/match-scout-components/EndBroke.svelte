<script lang="ts">
    import { broke } from "$lib/stores/matchScoutStores";
<<<<<<< HEAD
    import SwitchToggle from "../ui-components/SwitchToggle.svelte"
=======
    import Switch from "$lib/components/ui-components/Switch.svelte";
>>>>>>> 49ca54c42545aee50e501ab53530b8e7c2a40edd
</script>

<SwitchToggle bind:checked={$broke} name="Is Broken"></SwitchToggle>

