<script lang="ts">
  import { event_key, team_key } from "$lib/stores/pitScoutStores";
</script>

<div class="grid grid-cols-1 grid-rows-3 place-items-center">
  <h1 class="text-red-600 text-xl text-center">Details</h1>
  <label>Event Key: <input class="bg-yellow-300" bind:value={$event_key} /></label>
  <label>Team Key: <input class="bg-yellow-300" bind:value={$team_key} /></label>
</div>  
