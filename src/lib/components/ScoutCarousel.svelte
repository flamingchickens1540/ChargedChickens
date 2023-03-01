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
    import DefenseButton from "./match-scout-components/DefenseButton.svelte"
  
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

<body>
  <!-- <h1 class="text-red-600 text-4xl text-center font-bold">Match Scout</h1>   -->

  <!-- fix margin -->
  <div id="carousel" class="h-screen w-full" style="margin-top:-1.5rem; padding-top:1.5rem">
    <div id="auto" >
      <AutoScore />
      <div class="place-items-center" style="padding:10px;">
        <AutoChargeStation />
        <AutoCommunity />
      </div>
    </div>
    <div id="tele" style="padding:10px;">
      <TeleScore />
      <DefenseButton/>
      <br>
    </div>
    <div id="end" style="padding:10px;">
      <EndChargeStation />
      <br>
      <EndDriverSkill />
      <br>
      <EndBroke/>
      <EndDied/>
      <br>
      <EndNotes />
    </div>
    <div id=submit style="padding:10px;">
      <Submit />
    </div>
  </div>

</body>

<style>
  body {
    background: #dbd6d6;
  }
</style>