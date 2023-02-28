<script lang="ts">
  import { length, width } from "$lib/stores/pitScoutStores";
</script>

<div class="grid grid-rows-3 grid-cols-1 place-items-center">
  <h1 class="text-red-600 text-xl text-center">Dimensions</h1>
  <label for="length">Length(cm)</label>
  <input name="length" type="number" bind:value={$length}>
  <label for="width">Width(cm)</label>
  <input name="width" type="number" bind:value={$width}>
</div>