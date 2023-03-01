<script lang="ts">
  import { automation } from "$lib/stores/pitScoutStores";
  import Rating from "../ui-components/Rating.svelte";
  import Range from "../ui-components/Range.svelte"
</script>

<h1 class="text-red-600 text-xl text-center">Automation Scale(1-5)</h1>
<div class = "makeBorder">
    <h1>Fully Auto</h1>
    <Range bind:value = {$automation}/>
    <h1>Fully Manual</h1>
</div>

<style>
.makeBorder{
  display: flex;
  width: 341px;
  align-items: center;
  font-family: "Poppins";
}

</style>