<script lang="ts">
  import { tele_high_center_fail, tele_high_center_succeed, tele_high_left_fail, tele_high_left_succeed, tele_high_right_fail, tele_high_right_succeed, tele_low_center_fail, tele_low_center_succeed, tele_low_left_fail, tele_low_left_succeed, tele_low_right_fail, tele_low_right_succeed, tele_mid_center_fail, tele_mid_center_succeed, tele_mid_left_fail, tele_mid_left_succeed, tele_mid_right_fail, tele_mid_right_succeed, tele_score } from "$lib/stores/matchScoutStores";
    import ScoreTable from "../ui-components/ScoreTable.svelte"
  // import { DEBUG } from "../generalStores";
</script>

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