<script lang="ts">
    import { tele_high_center_fail, tele_high_center_succeed, tele_high_left_fail, tele_high_left_succeed, tele_high_right_fail, tele_high_right_succeed, tele_low_center_fail, tele_low_center_succeed, tele_low_left_fail, tele_low_left_succeed, tele_low_right_fail, tele_low_right_succeed, tele_mid_center_fail, tele_mid_center_succeed, tele_mid_left_fail, tele_mid_left_succeed, tele_mid_right_fail, tele_mid_right_succeed, tele_score } from "$lib/stores/matchScoutStores";
    import ScoreTable from "../ui-components/ScoreTable.svelte"
    import { info } from "$lib/stores/generalStores";

  // import { DEBUG } from "../generalStores";
</script>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
<link
    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
    rel="stylesheet"
/>
<div class="grid grid-rows-1 grid-cols-1 place-items-center">
    <h1 id="header" class="text-purple-600 text-center text-5xl font-extrabold">Telescore team_number</h1>
</div>

<ScoreTable fail={
[
  tele_high_left_fail, 
  tele_high_center_fail, 
  tele_high_right_fail, 
  tele_mid_left_fail, 
  tele_mid_center_fail, 
  tele_mid_right_fail, 
  tele_low_left_fail, 
  tele_low_center_fail, 
  tele_low_right_fail
]
} 
success={
[
  tele_high_left_succeed, 
  tele_high_center_succeed, 
  tele_high_right_succeed, 
  tele_mid_left_succeed, 
  tele_mid_center_succeed, 
  tele_mid_right_succeed, 
  tele_low_left_succeed, 
  tele_low_center_succeed, 
  tele_low_right_succeed
]
}/>