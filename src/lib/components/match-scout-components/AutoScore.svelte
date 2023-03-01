<script lang="ts">
    import { auto_high_center_fail, auto_high_center_succeed, auto_high_left_fail, auto_high_left_succeed, auto_high_right_fail, auto_high_right_succeed, auto_low_center_fail, auto_low_center_succeed, auto_low_left_fail, auto_low_left_succeed, auto_low_right_fail, auto_low_right_succeed, auto_mid_center_fail, auto_mid_center_succeed, auto_mid_left_fail, auto_mid_left_succeed, auto_mid_right_fail, auto_mid_right_succeed, auto_score } from "$lib/stores/matchScoutStores";
    import TeleOpScoring from "$lib/assets/TeleOpScoring-removebg-preview.png";
    import { Canvas, Layer } from "svelte-canvas";
    import { onMount } from 'svelte';
    import { DEBUG } from "$lib/stores/generalStores";
    import DefenseButton from "./DefenseButton.svelte"

    let outerHeight : number;
    let outerWidth : number;

    let clicked: boolean = false;
    let row: number;
    let col: number;

    let success: boolean = false;
    let fail: boolean = false;
    let successColor = "#fcf7f7";
    let failColor = "#fcf7f7";

    const autoScoreSucceed = [
        auto_high_left_succeed, 
        auto_high_center_succeed, 
        auto_high_right_succeed, 
        auto_mid_left_succeed, 
        auto_mid_center_succeed, 
        auto_mid_right_succeed, 
        auto_low_left_succeed, 
        auto_low_center_succeed, 
        auto_low_right_succeed
    ];
    const autoScoreFail = [
        auto_high_left_fail, 
        auto_high_center_fail, 
        auto_high_right_fail, 
        auto_mid_left_fail, 
        auto_mid_center_fail, 
        auto_mid_right_fail, 
        auto_low_left_fail, 
        auto_low_center_fail, 
        auto_low_right_fail
    ];

    // @ts-ignore
    $: render = ({ context }) => {

        const AutoScoreBoard = new Image();

        AutoScoreBoard.src = TeleOpScoring;
        AutoScoreBoard.onload = () => {
            context.drawImage(AutoScoreBoard, 0, 0, outerWidth, outerWidth);
        };
    };

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
    if(mouse.offsetY == outerWidth || mouse.offsetX == outerWidth)
      return;

    row = Math.floor(mouse.offsetY / outerWidth * 3);
    col = Math.floor(mouse.offsetX / outerWidth * 3);

    if (DEBUG) {
      console.log("Row: ");
      console.log(row);
      console.log("Column:");
      console.log(col);
    }
    clicked = true;
  }

  /**
   * Toggles the success boolean, and changes the color of the success button
   */
  function handleSuccessClick() {
    if (DEBUG) console.log("Success changed to " + !success)
    success = true;
    fail = false;
    if (success) {
      successColor = "#0fdb1a";
      failColor = "#fcf7f7";
    } else {
      successColor = "#fcf7f7";
      failColor = "#db0f0f";
    }
  }

  /**
   * Toggles the fail boolean, and changes the color of the fail button
   * 
   */
  function handleFailClick() {
    if (DEBUG) console.log("Fail changed to " + !fail);
    success = false;
    fail = true;
    if (fail) {
      successColor = "#fcf7f7";
      failColor = "#db0f0f";
    } else {
      successColor = "#0fdb1a";
      failColor = "#fcf7f7";
    }
  }
  /**
   * Increments fail or succeed for a given tile based on if success and/or fail was clicked
   * Resets clicked to false, removing success/fail/button elements
   * 
   * @complete
   */
  function handleBackClick() {
    if (fail) {
      autoScoreFail[col + row * 3].update(n => n + 1);
      if (DEBUG) console.log("Incremented TeleScore Fail By One");
    } else if (success) {
      autoScoreSucceed[col + row * 3].update(n => n + 1);
      if (DEBUG) console.log("Incremented TeleScore Succed By One");
    }
    clicked = false;
    success = false;
    successColor = "#fcf7f7";
    fail = false;
    failColor = "#fcf7f7";
  }

    onMount(() => {
        outerWidth = document.getElementById("header")?.clientWidth || window.outerWidth
        outerHeight = document.getElementById("header")?.clientHeight || window.outerHeight

        // outerWidth -= 20;
        // outerHeight -= 20;
        outerHeight /= 1.2;
        outerWidth /= 1.2;
    })

</script>

<!-- <svelte:window bind:outerHeight bind:outerWidth/> -->
{#if clicked}
<br>
  <div class="grid grid-rows-1 grid-cols-2 place-items-center" style="">
    <button id="successBtn" class="w-40 h-40 outline" style="--success-color:{successColor}" on:click={handleSuccessClick}>Success</button>
    <button id="failBtn" class="w-40 h-40 outline" style="--fail-color:{failColor}" on:click={handleFailClick}>Failure</button>
  </div>
  <br>
  <div class="grid grid-rows-1 grid-cols-1 place-items-center">
    <button id="backBtn" class="w-40 h-20 outline" on:click={handleBackClick}>Back</button>
  </div>
  {:else}
  <div class="grid grid-rows-1 grid-cols-1 place-items-center">
      <Canvas
      width={outerWidth}
      height={outerWidth}   
      class="object-center"
      on:click={mouseClicked}
      >
          <Layer {render} />
      </Canvas>
  </div>
{/if}
<style>
    #successBtn {
      background-color: var(--success-color);
    }

    #failBtn {
      background-color: var(--fail-color);
    }

    #backBtn {
      background-color: beige;
    }

    div {
      font-family: "Poppins";
    }
</style>
