<script lang="ts">
  import TeleOpScoring from "$lib/assets/Teleop.png";
  import { tele_high_center_fail, tele_high_center_succeed, tele_high_left_fail, tele_high_left_succeed, tele_high_right_fail, tele_high_right_succeed, tele_low_center_fail, tele_low_center_succeed, tele_low_left_fail, tele_low_left_succeed, tele_low_right_fail, tele_low_right_succeed, tele_mid_center_fail, tele_mid_center_succeed, tele_mid_left_fail, tele_mid_left_succeed, tele_mid_right_fail, tele_mid_right_succeed, tele_score } from "$lib/stores/matchScoutStores";
  // import { DEBUG } from "../generalStores";
  import DefenseButton from "$lib/components/match-scout-components/DefenseButton.svelte";
  import ScoreTable from "$lib/components/ui-components/ScoreTable.svelte";
    import { onMount } from "svelte"

    let outerHeight : number;
    let outerWidth : number;

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
  $: render = ({ context }) => {
    const TeleOpScoreBoard = new Image();

    TeleOpScoreBoard.src = TeleOpScoring;
    TeleOpScoreBoard.onload = () => {
      context.drawImage(TeleOpScoreBoard, 0, 0, outerWidth, outerWidth);
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
   */
  function mouseClicked(mouse : MouseEvent) {
    if(mouse.offsetY == outerWidth || mouse.offsetX == outerWidth)
      return;

    const row = Math.floor(mouse.offsetY / outerWidth * 3);
    const col = Math.floor(mouse.offsetX / outerWidth * 3);

    // if (DEBUG) {
    //   console.log("Row: ");
    //   console.log(row);
    //   console.log("Column:");
    //   console.log(col);
    // }
    
    teleScoreSucceed[col + row * 3].update(n => n++);
  }

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
   */

  function mouseDoubleClicked(mouse: MouseEvent) {
    if(mouse.offsetY == outerWidth || mouse.offsetX == outerWidth)
      return;

    const row = Math.floor(mouse.offsetY / outerWidth * 3);
    const col = Math.floor(mouse.offsetX / outerWidth * 3); 

    // if (DEBUG) {
    //   console.log("Row: ");
    //   console.log(row);
    //   console.log("Column:");
    //   console.log(col);
    // }
    
    teleScoreFail[col + row * 3].update(n => n++);
  }

  onMount(() => {
    outerWidth = document.getElementById("header")?.clientWidth || window.outerWidth
    outerHeight = document.getElementById("header")?.clientHeight || window.outerHeight
  })

</script>

<!-- <svelte:window bind:outerHeight bind:outerWidth/> -->
<h1 id="header" class="text-red-600 text-center text-5xl font-extrabold">TeleScore</h1>

<ScoreTable scoreSucceed={teleScoreSucceed} scoreFail={teleScoreFail}/>

<DefenseButton />

<style>
</style>
