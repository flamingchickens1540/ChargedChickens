<script lang="ts">
  import { polish } from "$lib/stores/pitScoutStores";
  import Rating from "../ui-components/Rating.svelte";
</script>

<h1 class="text-red-600 text-xl text-center">Polish</h1>

<div class="grid place-items-center">
  <Rating bind:rating={$polish} />
</div>