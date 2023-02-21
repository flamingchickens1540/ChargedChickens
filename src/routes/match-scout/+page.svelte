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
  import Siema from "siema";
  import { onMount } from "svelte";
  import Submit from "$lib/components/match-scout-components/Submit.svelte";

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
  });
</script>

<body>
  <!-- <h1 class="text-red-600 text-4xl text-center font-bold">Match Scout</h1>   -->
  <div id="carousel" class="h-screen w-full">
    <div id="auto" class = "endBackground">
      <AutoScore />
      <br />

      <AutoChargeStation />
      <br />
      <div class = "makeBorder">
        <AutoCommunity />
      </div>
    </div>
    <div id="tele">
      <TeleScore />
    </div>
    <div id="end" class = "endBackground">
      <div class="makeWide">
        <EndChargeStation />
      </div>
      <div class = "makeWideSkills">
        <EndDriverSkill />
      </div>
      <div class = "makeWideSwitches">
        <div class="makeBorder">
          <EndBroke />
          <EndDied />
        </div>
      </div>
      <div class = "makeWideNotes">
        <EndNotes />
      </div>
    </div>
    <div id="submit">
      <Submit />
    </div>
  </div>
</body>

<style>
  .makeBorder {
    display: flex;
    flex-direction: column;
    background-color: #efdcdc;
    border-color: black;
    border-width: 2px;
    border-radius: 0.5rem;
  }
  body {
    background-color: rgb(85, 163, 218);
  }

  .endBackground {
    background-image: linear-gradient(to top right, #dbd6d6, #dbd6d6);
    padding-left: 17px;
    padding-right: 17px;
    padding: 17px;
  }

  .makeWide {
    height: 302px;
  }

  .makeWideSkills {
    height: 82px;
  }

  .makeWideSwitches{
    height: 103px;  
  }

  .makeWideNotes{
    height: 98px;
  }
</style>
