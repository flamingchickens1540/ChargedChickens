<script lang="ts">
    import { auto_community } from '$lib/stores/matchScoutStores'
    import SwitchToggle from '$lib/components/ui-components/SwitchToggle.svelte'
</script>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
<link
    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
    rel="stylesheet"
/>

<SwitchToggle bind:checked={$auto_community} name="Did the Robot leave its community?" />
