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
    import { onMount } from 'svelte'
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
    let defenseColor = "blueviolet";
  
    let gridIndex : number;

    /**
     * Shows the succeed-fail screen for the giving grid index
     * @see ScoreTable.svelte
     * @param index gridIndex
     */
    function gridSelected(index : number) {
      gridIndex = index;
      succeedFailScreen = true;
    }
  
    /**
     * Handles successes or failures of scoring attempts. Records the cycle times.
     * @see ScoreTable.svelte
     * @param succeed Whether the succeeded
     */
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
  
    /**
     * @description Handles a defense button press if the succeed-fail screen is not active. The ScoreTable screen is always set to the grid after this is called.
     */
    function handleMouseup() {

      if (!succeedFailScreen) {
        const time = Date.now() - initialDefenseTime
        if (time > 500) $defense_times.push(time / 1000)
      }
      succeedFailScreen = false;
      defenseColor = "blueviolet";
    } 
  
    /**
     * Handles the start of a defense button press
     */
    function handleMousedown() {

      if(!succeedFailScreen) {
        defenseColor = "yellow";
        initialDefenseTime = Date.now();
      }
    }


  onMount(() => {
    // Needed since the mousedown event is emitted after the element is unpressed on mobile. mouseup acts the same as touchend.
    (document.getElementById("defenseButton") as HTMLElement)[navigator.maxTouchPoints? "ontouchstart" : "onmousedown"] = handleMousedown;
  });
  </script>

<div class="grid grid-rows-1 grid-cols-1 place-items-center">
    <h1
        id="header"
        class="text-{$info.robot?.alliance}-600 text-center text-4xl font-extrabold">
        Telescore {$info.robot?.team_key}
    </h1>
</div>
  
  <ScoreTable 
    succeedFailScreen={succeedFailScreen}
    gridSelected={gridSelected}
    successFailSelected={successFailSelected}>
  </ScoreTable>
  <!-- <Canvas
  width={tableWidth}
  height={tableWidth}
  class="object-center"
  on:click={mouseClicked}
  style="
  >
  <Layer {render} />
  </Canvas> -->
  
  <div class="p-5 grid grid-cols-1 grid-rows-1 place-items-center">
    <button
        style="background-color: {defenseColor}"
        on:mouseup={handleMouseup}
        class="h-32 w-80 lg:flex-grow sm:flex-shrink rounded-full select-none" id="defenseButton">
        {succeedFailScreen ? "Back" : "Defense"}
    </button>
  </div>