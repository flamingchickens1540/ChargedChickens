<script lang="ts">
    import { notes } from "$lib/stores/matchScoutStores";
</script>

<h1 class="text-red-600 text-center">Notes about the Endgame</h1>

<input type="text" class="h-12 w-36"bind:value={$notes}>