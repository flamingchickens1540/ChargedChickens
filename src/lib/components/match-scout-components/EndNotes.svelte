<script lang="ts">
    import { notes } from "$lib/stores/matchScoutStores";
</script>

<h1 class="text-red-600 text-center">Team Notes</h1>

<input type="text" class="h-36 w-80"bind:value={$notes}>