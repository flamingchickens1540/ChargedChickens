<script lang="ts">
    import { died } from '$lib/stores/matchScoutStores'
    import SwitchToggle from '$lib/components/ui-components/SwitchToggle.svelte'
</script>

<SwitchToggle bind:checked={$died} name="Did the Robot die?" stack={true} />
