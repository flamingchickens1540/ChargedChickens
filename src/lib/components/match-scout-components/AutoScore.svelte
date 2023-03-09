<script lang="ts">
  import TeleOpScoring from "$lib/assets/Teleop.png";
  import SucceessFailure from '$lib/assets/SuccessFailure.png'
  import {
  auto_high_left_succeed, 
  auto_high_center_succeed, 
  auto_high_right_succeed, 
  auto_mid_left_succeed, 
  auto_mid_center_succeed, 
  auto_mid_right_succeed, 
  auto_low_left_succeed, 
  auto_low_center_succeed, 
  auto_low_right_succeed,
  auto_high_left_fail, 
  auto_high_center_fail, 
  auto_high_right_fail, 
  auto_mid_left_fail, 
  auto_mid_center_fail, 
  auto_mid_right_fail, 
  auto_low_left_fail, 
  auto_low_center_fail, 
  auto_low_right_fail
} from '$lib/stores/matchScoutStores'
  import { info } from "$lib/stores/generalStores"

const teleScoreSucceed = [
  auto_high_left_succeed, 
  auto_high_center_succeed, 
  auto_high_right_succeed, 
  auto_mid_left_succeed, 
  auto_mid_center_succeed, 
  auto_mid_right_succeed, 
  auto_low_left_succeed, 
  auto_low_center_succeed, 
  auto_low_right_succeed
]
const teleScoreFail = [
  auto_high_left_fail, 
  auto_high_center_fail, 
  auto_high_right_fail, 
  auto_mid_left_fail, 
  auto_mid_center_fail, 
  auto_mid_right_fail, 
  auto_low_left_fail, 
  auto_low_center_fail, 
  auto_low_right_fail
]


  let tableWidth : number;

  let clicked: boolean = false;
  let gridIndex : number;

  /**
  * Handles the double clicking of the mouse on the telescore canvas
  * The purpose is to increment one of the teleScoreFail stores based on which cell on the canvas grid was clicked
  * 
  * @remarks
  * For some reason, the rows calculation starts at 1, when it should start at 0, so we decrement the value by 1
  * This is most likely because the elementHeight var actual measures from the top of the screen, not the top of the canvas
  * This means that the 0th row is treated like the 1st row, even though clicks made on the 1st row are disregarded.
  * 
  * @param mouse - type: MouseEvent
  * 
  * @todo
  * Make clicking display a success/fail choice component
  * 
  */
  function mouseClicked(mouse : MouseEvent) {
      if(mouse.offsetY == tableWidth || mouse.offsetX == tableWidth)
          return;

        if (!clicked) {
          clicked = true;
            gridIndex =  Math.floor(mouse.offsetX / tableWidth * 3) + Math.floor(mouse.offsetY / tableWidth * 3) * 3;
        } else {
            if (mouse.offsetX < outerWidth / 2) {
                teleScoreSucceed[gridIndex].update(n => n + 1);
                // const timestamp = Date.now();
                // if (lastCycleTimestamp != null) $cycle_times.push((timestamp - lastCycleTimestamp) / 1000);
                // lastCycleTimestamp = timestamp;
            }
            else {
                teleScoreFail[gridIndex].update(n => n + 1);
            }
            
            clicked = false;
        }
  }

  function handleBackClick() {
    clicked = false;
  }
</script>

<div class="grid grid-rows-1 grid-cols-1 place-items-center">
  <h1 id="header" class="text-{$info.robot?.alliance}-600 text-center text-4xl font-extrabold">Autoscore {$info.robot?.team_key}</h1>
</div><div on:mousedown={mouseClicked} bind:clientWidth={tableWidth} style="
<!-- background: #F0E6E6; -->;
padding: 2%;

border-width:0.75vw;
border-color: black;
border-radius: 1.5vw;
">
<img src={clicked ? SucceessFailure : TeleOpScoring} alt=""/>
</div>
{#if clicked}
<div
  class="p-5 grid grid-cols-1 grid-rows-1 place-items-center"
>
  <button
  style="background-color: blueviolet"
      class="h-32 w-80 lg:flex-grow sm:flex-shrink rounded-full unselectable"
      on:click={handleBackClick}
      >Back</button
  >
</div>
{/if}

<style>
  div {
      font-family: "Poppins";
  }
</style>




<!-- <ScoreTable fail={
[
  auto_high_left_fail, 
  auto_high_center_fail, 
  auto_high_right_fail, 
  auto_mid_left_fail, 
  auto_mid_center_fail, 
  auto_mid_right_fail, 
  auto_low_left_fail, 
  auto_low_center_fail, 
  auto_low_right_fail
]
} 
success={
[
  auto_high_left_succeed, 
  auto_high_center_succeed, 
  auto_high_right_succeed, 
  auto_mid_left_succeed, 
  auto_mid_center_succeed, 
  auto_mid_right_succeed, 
  auto_low_left_succeed, 
  auto_low_center_succeed, 
  auto_low_right_succeed
]
}/> -->
