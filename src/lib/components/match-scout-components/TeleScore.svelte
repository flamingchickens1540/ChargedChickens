<script lang="ts">
  import { tele_high_center_fail, tele_high_center_succeed, tele_high_left_fail, tele_high_left_succeed, tele_high_right_fail, tele_high_right_succeed, tele_low_center_fail, tele_low_center_succeed, tele_low_left_fail, tele_low_left_succeed, tele_low_right_fail, tele_low_right_succeed, tele_mid_center_fail, tele_mid_center_succeed, tele_mid_left_fail, tele_mid_left_succeed, tele_mid_right_fail, tele_mid_right_succeed, tele_score } from "$lib/stores/matchScoutStores";
  // import { DEBUG } from "../generalStores";
  import DefenseButton from "$lib/components/match-scout-components/DefenseButton.svelte";
  import ScoreTable from "$lib/components/ui-components/ScoreTable.svelte";

  const teleScoreSucceed = [
    tele_high_left_succeed, 
    tele_high_center_succeed, 
    tele_high_right_succeed, 
    tele_mid_left_succeed, 
    tele_mid_center_succeed, 
    tele_mid_right_succeed, 
    tele_low_left_succeed, 
    tele_low_center_succeed, 
    tele_low_right_succeed
  ];
  const teleScoreFail = [
    tele_high_left_fail, 
    tele_high_center_fail, 
    tele_high_right_fail, 
    tele_mid_left_fail, 
    tele_mid_center_fail, 
    tele_mid_right_fail, 
    tele_low_left_fail, 
    tele_low_center_fail, 
    tele_low_right_fail
  ];

</script>

<!-- <svelte:window bind:outerHeight bind:outerWidth/> -->
<h1 id="header" class="text-red-600 text-center text-5xl font-extrabold">TeleScore</h1>

<ScoreTable scoreSucceed={teleScoreSucceed} scoreFail={teleScoreFail}/>

<DefenseButton />

<style>
</style>
