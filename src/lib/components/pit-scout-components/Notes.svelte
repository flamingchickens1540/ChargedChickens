<script lang="ts">
  import { notes } from "$lib/stores/pitScoutStores";
</script>

<h1 class="text-yellow-500 text-xl text-center">Pitscouting Notes</h1>

<div class="grid place-items-center">
  <input type="text" class="h-36 w-80"bind:value={$notes}>
</div>