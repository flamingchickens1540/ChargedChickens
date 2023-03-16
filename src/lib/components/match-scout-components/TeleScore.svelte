<script lang="ts">
        import { info } from '$lib/stores/generalStores'

    import {
    cycle_times,
    tele_high_center_fail,
    tele_high_center_succeed,
    tele_high_left_fail,
    tele_high_left_succeed,
    tele_high_right_fail,
    tele_high_right_succeed,
    tele_low_center_fail,
    tele_low_center_succeed,
    tele_low_left_fail,
    tele_low_left_succeed,
    tele_low_right_fail,
    tele_low_right_succeed,
    tele_mid_center_fail,
    tele_mid_center_succeed,
    tele_mid_left_fail,
    tele_mid_left_succeed,
    tele_mid_right_fail,
    tele_mid_right_succeed,
  } from '$lib/stores/matchScoutStores'
  import { defense_times } from '$lib/stores/matchScoutStores'
      import ScoreTable from "../ui-components/ScoreTable.svelte"
  
  let succeedFailScreen : boolean;
  
  const teleScoreSucceed = [
    tele_high_left_succeed,
    tele_high_center_succeed,
    tele_high_right_succeed,
    tele_mid_left_succeed,
    tele_mid_center_succeed,
    tele_mid_right_succeed,
    tele_low_left_succeed,
    tele_low_center_succeed,
    tele_low_right_succeed,
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
    tele_low_right_fail,
  ];
  
    let initialDefenseTime : number;
    let lastCycleTimestamp : number;
  
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
  
    let gridIndex : number;
    function gridSelected(index : number) {
      gridIndex = index;
      succeedFailScreen = true;
    }
  
    function successFailSelected(succeed : boolean) {
      if(succeed) {
        teleScoreSucceed[gridIndex].update(n => n + 1);
        const timestamp = Date.now();
        if (lastCycleTimestamp != null) 
          $cycle_times.push((timestamp - lastCycleTimestamp) / 1000);
        lastCycleTimestamp = timestamp;
      } else {
        teleScoreFail[gridIndex].update(n => n + 1);
      }
      succeedFailScreen = false;
    }
  
    function handleMouseup() {
      if (!succeedFailScreen) {
        const time = Date.now() - initialDefenseTime
        if (time > 500) $defense_times.push(time / 1000)
      }
      succeedFailScreen = false;
    } 
  
    function handleMousedown() {
      if(!succeedFailScreen) {
        initialDefenseTime = Date.now();
      }
    }
  </script>

<div class="grid grid-rows-1 grid-cols-1 place-items-center">
    <h1
        id="header"
        class="text-{$info.robot
            ?.alliance}-600 text-center text-4xl font-extrabold"
    >
        Telescore {$info.robot?.team_key}
    </h1>
</div>
  
  <ScoreTable succeedFailScreen={succeedFailScreen}
  gridSelected={gridSelected}
  successFailSelected={successFailSelected}
  ></ScoreTable>
  <!-- <Canvas
  width={tableWidth}
  height={tableWidth}
  class="object-center"
  on:click={mouseClicked}
  style="
  >
  <Layer {render} />
  </Canvas> -->
  
  <div
    class="p-5 grid grid-cols-1 grid-rows-1 place-items-center"
  >
    <button
    style="background-color: blueviolet"
        class="h-32 w-80 lg:flex-grow sm:flex-shrink rounded-full unselectable"
        on:touchstart={handleMousedown}
        on:touchend={handleMouseup}
        >{succeedFailScreen ? "Back" : "Defense"}</button
    >
  </div>