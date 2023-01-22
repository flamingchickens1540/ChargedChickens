<script lang="ts">
  import AutoChargeStation from "../../lib/components/AutoChargeStation.svelte";
  import AutoCommunity from "../../lib/components/AutoCommunity.svelte";
  import EndBroke from "../../lib/components/EndBroke.svelte";
  import EndChargeStation from "../../lib/components/EndChargeStation.svelte";
  import EndDied from "../../lib/components/EndDied.svelte";
  import EndDriverSkill from "../../lib/components/EndDriverSkill.svelte";
  import EndNotes from "../../lib/components/EndNotes.svelte";
  import AutoScore from "../../lib/components/AutoScore.svelte";
  import TeleScore from "../../lib/components/TeleScore.svelte";
  import Siema from "siema";
  import { onMount } from "svelte";
  
  onMount(() => {
    new Siema({
      selector: ".carousel",
      duration: 200,
      easing: "ease-in-out",
      perPage: 1,
      startIndex: 0,
      draggable: true,
      multipleDrag: false,
      threshold: 20,
      loop: false,
      rtl: false,
      onInit: () => {},
      onChange: () => {},
    });
  })
</script>

<h1 class="text-red-600 text-4xl text-center font-bold">Match Scout</h1>

<div class="carousel">
  <div id="auto">
    <AutoScore />
    <AutoChargeStation />
    <AutoCommunity />
  </div>
  <div id="tele">
    <TeleScore />
  </div>
  <div id="end">
    <EndChargeStation />
    <EndDriverSkill />
    <EndBroke />
    <EndDied />
    <EndNotes />
  </div>
</div>
