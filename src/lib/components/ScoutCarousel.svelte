<script lang="ts">
  import AutoChargeStation from "$lib/components/match-scout-components/AutoChargeStation.svelte";
  import AutoCommunity from "$lib/components/match-scout-components/AutoCommunity.svelte";
  import EndBroke from "$lib/components/match-scout-components/EndBroke.svelte";
  import EndChargeStation from "$lib/components/match-scout-components/EndChargeStation.svelte";
  import EndDied from "$lib/components/match-scout-components/EndDied.svelte";
  import EndDriverSkill from "$lib/components/match-scout-components/EndDriverSkill.svelte";
  import EndNotes from "$lib/components/match-scout-components/EndNotes.svelte";
  import AutoScore from "$lib/components/match-scout-components/AutoScore.svelte";
  import TeleScore from "$lib/components/match-scout-components/TeleScore.svelte";
  import Submit from "$lib/components/match-scout-components/Submit.svelte";
  import Siema from "siema";
  import { onMount } from "svelte";
  
  onMount(() => {
    new Siema({
      selector: "#carousel",
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

<body class="bg-blue-500">
  <!-- <h1 class="text-red-600 text-4xl text-center font-bold">Match Scout</h1>   -->
  <div id="carousel" class="h-screen w-full">
    <div id="auto" >
      <AutoScore />
      <div class="grid grid-rows-1 grid-cols-2 place-items-center">
        <AutoChargeStation />
        <AutoCommunity />
      </div>
    </div>
    <div id="tele">
      <TeleScore />
      <br>
    </div>
    <div id="end">
      <EndChargeStation />
      <br>
      <EndDriverSkill />
      <br>
      <EndBroke />
      <br>
      <EndDied />
      <br>
      <EndNotes />
    </div>
    <div id=submit>
      <Submit />
    </div>
  </div>

</body>

<style>
  body {
    background-color: rgb(85, 163, 218);
  }
</style>