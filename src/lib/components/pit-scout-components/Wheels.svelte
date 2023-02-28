<script lang="ts">
  import { slippery_wheels } from "$lib/stores/pitScoutStores";
  import Switch from "../ui-components/Switch.svelte";
</script>

<h1 class="text-yellow-400 text-xl text-center">Slippery Wheels</h1>

<div class="grid place-items-center">
  <Switch bind:checked={$slippery_wheels} />
</div>