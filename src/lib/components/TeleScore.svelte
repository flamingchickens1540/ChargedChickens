<script lang="ts">
  import TeleOpScoring from "$lib/assets/TeleOpScoring.png";
  import { tele_high_center_fail, tele_high_center_succeed, tele_high_left_fail, tele_high_left_succeed, tele_high_right_fail, tele_high_right_succeed, tele_low_center_fail, tele_low_center_succeed, tele_low_left_fail, tele_low_left_succeed, tele_low_right_fail, tele_low_right_succeed, tele_mid_center_fail, tele_mid_center_succeed, tele_mid_left_fail, tele_mid_left_succeed, tele_mid_right_fail, tele_mid_right_succeed, tele_score } from "../matchScoutStores";
  import { DEBUG } from "../generalStores";

  import { Canvas, Layer } from "svelte-canvas";
  import DefenseButton from "./DefenseButton.svelte";

  let innerHeight: number;
  let innerWidth: number;
  let elementHeight = 400;

  const ROWS = 3;
  const COLUMNS = 3;

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

    TeleOpScoreBoard.src = TeleOpScoring;
    TeleOpScoreBoard.onload = () => {
      context.drawImage(TeleOpScoreBoard, 0, 0, width, height);
    };
  };

  /**
   * Determines whether or not the mouseEvent(click) was within the bounds of the canvas
   * 
   * @remarks
   * Plus 150 is to move the starting place of elementHeight to the start of the canvas
   * 
   * @param mouse - Type: MouseEvent
   * @returns type: boolean
   * 
   * @todo
   * Make the constant equal to the distance from the top of the window to the top of the canvas
   */
  function mouseWithinBounds(mouse: MouseEvent) : boolean {

    return mouse.x >= 0 && mouse.x <= innerWidth && mouse.y >= 0 && mouse.y <= elementHeight + 150;
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
   * @todo 
   * Fix the problem with row calculation stated in remarks
   * (The problem is that the elementHeight is being measured from the top of the screen not the top of the canvas
   * This means that the lowest row happens to trigger mouseWithinBounds to be false
   * Make the measurment start from the top of the canvas
   * This change needs to be made in sync with changes to mouseWithinBounds to work properly
   */
  function mouseClicked(mouse : MouseEvent) {
    if (!mouseWithinBounds(mouse)){
      console.log("Not within Bounds")
      return;
    }

    const row = Math.floor(mouse.y / elementHeight * ROWS) - 1; 
    const col = Math.floor(mouse.x / innerWidth * COLUMNS);

    if (DEBUG) {
      console.log("x");
      console.log(mouse.x);
      console.log("y");
      console.log(mouse.y);
      console.log("Row: ");
      console.log(row);
      console.log("Column:");
      console.log(col);
    }
    
    teleScoreSucceed[col + row * COLUMNS].update(n => n++);
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
   * @todo 
   * Fix the problem with row calculation stated in remarks
   * (The problem is that the elementHeight is being measured from the top of the screen not the top of the canvas
   * This means that the lowest row happens to trigger mouseWithinBounds to be false
   * Make the measurment start from the top of the canvas
   * This change needs to be made in sync with changes to mouseWithinBounds to work properly
   */
  function mouseDoubleClicked(mouse: MouseEvent) {
    if (!mouseWithinBounds(mouse)){
      console.log("Not within Bounds")
      return;
    }

    const row = Math.floor(mouse.y / elementHeight * ROWS) - 1; 
    const col = Math.floor(mouse.x / innerWidth * COLUMNS);

    if (DEBUG) {
      console.log("x");
      console.log(mouse.x);
      console.log("y");
      console.log(mouse.y);
      console.log("Row: ");
      console.log(row);
      console.log("Column:");
      console.log(col);
    }
    
    teleScoreFail[col + row * COLUMNS].update(n => n++);
  }
    
  
</script>

<svelte:window bind:innerHeight bind:innerWidth />
<strong><h1 class="text-red-600 text-center text-5xl">TeleScore</h1></strong>

<Canvas
  width={innerWidth}
  height={elementHeight}
  class="object-center"
  on:click={mouseClicked} on:dblclick={mouseDoubleClicked}
>
  <Layer {render} />
</Canvas>

<DefenseButton />

<style>
</style>
