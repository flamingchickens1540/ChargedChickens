<script lang="ts">
  import TeleOpScoring from "$lib/assets/Teleop.png";
  import { tele_high_center_fail, tele_high_center_succeed, tele_high_left_fail, tele_high_left_succeed, tele_high_right_fail, tele_high_right_succeed, tele_low_center_fail, tele_low_center_succeed, tele_low_left_fail, tele_low_left_succeed, tele_low_right_fail, tele_low_right_succeed, tele_mid_center_fail, tele_mid_center_succeed, tele_mid_left_fail, tele_mid_left_succeed, tele_mid_right_fail, tele_mid_right_succeed, tele_score } from "$lib/stores/matchScoutStores";
  // import { DEBUG } from "../generalStores";
  import SucceedFail from "$lib/assets/SuccessFail.png";

  import { Canvas, Layer } from "svelte-canvas";
  import DefenseButton from "$lib/components/match-scout-components/DefenseButton.svelte";
	import { onMount } from 'svelte';
  import { DEBUG, info } from "$lib/stores/generalStores"

  let outerHeight : number;
  let outerWidth : number;

  let clicked: boolean = false;
  let row: number;
  let col: number;

  let success: boolean = false;
  let fail: boolean = false;
  let successColor = "#fcf7f7";
  let failColor = "#fcf7f7";

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
  
  // @ts-ignore
  $: render = ({ context, width, height }) => {
    const TeleOpScoreBoard = new Image();
    const SuccessFailBoard = new Image();

    TeleOpScoreBoard.src = TeleOpScoring;
    SuccessFailBoard.src = SucceedFail;

    TeleOpScoreBoard.onload = () => {
      context.drawImage(TeleOpScoreBoard, 0, 0, width, height);
    };

    function testFunction() {
      console.log("test");
    }

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
    success = !success;
    if (success) {
      successColor = "#0fdb1a"
    } else {
      successColor = "#fcf7f7"
    }
  }

  /**
   * Toggles the fail boolean, and changes the color of the fail button
   * 
   */
  function handleFailClick() {
    if (DEBUG) console.log("Fail changed to " + !fail);
    fail = !fail;
    if (fail) {
      failColor = "#db0f0f"
    } else {
      failColor = "#fcf7f7"
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
      teleScoreFail[col + row * 3].update(n => n + 1);
      if (DEBUG) console.log("Incremented TeleScore Fail By One");
    }
    if (success) {
      teleScoreSucceed[col + row * 3].update(n => n + 1);
      if (DEBUG) console.log("Incremented TeleScore Succed By One");
    }
    clicked = false;
    success = false;
    fail = false;
  }

  onMount(() => {
    outerWidth = document.getElementById("header")?.clientWidth || window.outerWidth
    outerHeight = document.getElementById("header")?.clientHeight || window.outerHeight
  })

</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
<!-- <svelte:window bind:outerHeight bind:outerWidth/> -->
<div class = "grid grid-rows-1 grid-cols-2 place-items-center">
  <div class = ""> Endgame </div>
  <div class = ""> {$info.robot?.team_key} </div>
</div>

<Canvas
  width={outerWidth}
  height={outerWidth}
  class="object-center"
  on:click={mouseClicked}
>
  <Layer {render} />
</Canvas>

{#if clicked}
  <div class="grid grid-rows-1 grid-cols-2 place-items-center" style="">
    <button id="successBtn" class="w-40 h-24 outline" style="--success-color:{successColor}" on:click={handleSuccessClick}>Success</button>
    <button id="failBtn" class="w-40 h-24 outline" style="--fail-color:{failColor}" on:click={handleFailClick}>Failure</button>
  </div>
  <br>
  <div class="grid grid-rows-1 grid-cols-1 place-items-center">
    <button id="backBtn" class="w-40 h-12 outline" on:click={handleBackClick}>Back</button>
  </div>
{:else}
  <DefenseButton />
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
    

      /* .endgameTitle{
        display: flex;
        font-family: "Poppins";
        font-size: 36px; 
        padding-top: 11px;
        padding-left: 2px;      
        width: 50%;
      }

    .endgameTitleNumbers{
        display: flex;
        font-family: "Poppins";
        font-size: 36px; 
        padding-top: 11px;
        width: 50%;
        justify-content: right;
        padding-right: 11px;
    } */
    div {
      font-family: "Poppins";
    }
</style>
