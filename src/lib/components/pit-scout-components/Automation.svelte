<script lang="ts">
  import { automation } from "$lib/stores/pitScoutStores";
  import Rating from "../ui-components/Rating.svelte";
</script>

<h1 class="text-red-600 text-xl text-center">Automation Scale(1-5)</h1>
<div class="grid grid-rows-1 grid-cols-3 place-items-center">
    <h1>Fully Auto</h1>
    <Rating bind:rating={$automation} />
    <h1>Fully Manual</h1>
</div>