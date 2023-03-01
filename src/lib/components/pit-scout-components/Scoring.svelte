<script lang="ts">
  import { high_left, high_center, high_right, mid_left, mid_center, mid_right, low_left, low_center, low_right } from "$lib/stores/pitScoutStores";
  import { Canvas, Layer } from "svelte-canvas";
  import { onMount } from 'svelte';
  import TeleOpScoring from "$lib/assets/Teleop.png"
  import { DEBUG } from "$lib/stores/generalStores";

  let outerHeight : number;
  let outerWidth : number;

  const score = [
    high_left, 
    high_center, 
    high_right, 
    mid_left, 
    mid_center, 
    mid_right, 
    low_left, 
    low_center, 
    low_right
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

    if (DEBUG) {
      console.log("Row: ");
      console.log(row);
      console.log("Column:");
      console.log(col);
    }
    
    score[col + row * 3].update(n => !n);
  }

  onMount(() => {
    outerWidth = document.getElementById("header")?.clientWidth || window.outerWidth
    outerHeight = document.getElementById("header")?.clientHeight || window.outerHeight
<<<<<<< HEAD
=======

    outerHeight /= 1.2;
    outerWidth /= 1.2;
>>>>>>> 8ec3214e0ab1ebd31bad2cfdba45ed5eec19dff7
  })

</script>
<h1 class="text-orange-600 text-xl text-center">Scoring</h1>

<div class="grid place-items-center">
  <Canvas
    width={outerWidth}
    height={outerWidth}
    class="object-center"
    on:click={mouseClicked}
  >
  <Layer {render} />
  </Canvas>
</div>
