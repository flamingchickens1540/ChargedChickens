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
</script>

<h1 class="text-red-600 text-4xl text-center font-bold">Match Scout</h1>

<AutoScore />
<AutoChargeStation />
<AutoCommunity />

<TeleScore />

<EndChargeStation />
<EndDriverSkill />
<EndBroke />
<EndDied />
<EndNotes />
