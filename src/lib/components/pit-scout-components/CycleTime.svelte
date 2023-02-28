<script lang="ts">
  import { est_cycle_time } from "$lib/stores/pitScoutStores";
</script>

<div class="grid place-items-center">
  <h1 class="text-orange-600 text-xl text-center">Estimated CycleTime</h1>
  <input type="number" bind:value={$est_cycle_time}>
</div>
