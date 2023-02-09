<script lang="ts">
  import TeleOpScoring from "$lib/assets/TeleOpScoring.png";
  import { tele_high_center_fail, tele_high_center_succeed, tele_high_left_fail, tele_high_left_succeed, tele_high_right_fail, tele_high_right_succeed, tele_low_center_fail, tele_low_center_succeed, tele_low_left_fail, tele_low_left_succeed, tele_low_right_fail, tele_low_right_succeed, tele_mid_center_fail, tele_mid_center_succeed, tele_mid_left_fail, tele_mid_left_succeed, tele_mid_right_fail, tele_mid_right_succeed, tele_score } from "../matchScoutStores";

  import { Canvas, Layer } from "svelte-canvas";
  import DefenseButton from "./DefenseButton.svelte";

  let innerHeight = 0;
  let innerWidth = 0;
  let elementHeight = 0;

  let teleScoreSucced = [tele_high_left_succeed, tele_high_center_succeed, tele_high_right_succeed, tele_mid_left_succeed, tele_mid_center_succeed, tele_mid_right_succeed, tele_low_left_succeed, tele_low_center_succeed, tele_low_right_succeed];
  let teleScoreFail = [tele_high_left_fail, tele_high_center_fail, tele_high_right_fail, tele_mid_left_fail, tele_mid_center_fail, tele_mid_right_fail, tele_low_left_fail, tele_low_center_fail, tele_low_right_fail]
  
  let mouse = { x: 0, y: 0 };
  // @ts-ignore
  $: render = ({ context, width, height }) => {
    const TeleOpScoreBoard = new Image();

<<<<<<< HEAD
    import { Canvas, Layer, t } from 'svelte-canvas';

    // Grid width
    const bw = 120;
    // Grid height
    const bh = 120;
    // Padding X and Y
    const py = 10;
    const px = 10;

    const ROWS = 3;
    const COLUMNS = 3;

      // @ts-ignore
    $: render = ({ context, width, height }) => {
      // The number of boxes is determined by the ratio between the incrementer of x, and the base/height of the grid    
      for (let y = 0; y <= ROWS; y++) {
          context.moveTo(px, 0.5 + py + (y * bh / ROWS));
          context.lineTo(px, 0.5 + py + (y * bh / ROWS));
      }

      for (let x = 0; x <= COLUMNS; x++) {
        context.moveTo(0.5 + px + (x * bw / COLUMNS), py);
        context.lineTo(0.5 + px + (x * bw / COLUMNS), bh + py);
      }

      context.strokeStyle = "black";
      context.stroke();
=======
    TeleOpScoreBoard.src = TeleOpScoring;
    TeleOpScoreBoard.onload = () => {
      context.drawImage(TeleOpScoreBoard, 0, 0, width, height);
>>>>>>> 4963ad064a08fda9f51e659e6998f2b4aceada6c
    };
  };

  function getMousePos(evt: { clientX: number; clientY: number; }) {
    let canvas: HTMLCollection = document.getElementsByClassName("object-center");
    var rect: DOMRect = canvas[0].getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }
  // TODO: Jack code to be implemented on canvas
  //@ts-ignore
  function mouseClicked(e) {
    mouse = getMousePos(e);
    if (mouse.x < 0 || mouse.x > innerWidth || mouse.y < 0 || mouse.y > elementHeight)
      return;
    let row = Math.floor(mouse.y / elementHeight);
    console.log(row);
    let col = Math.floor(mouse.x / innerWidth);
    
    teleScoreSucced[(row-1)*3+(col-1)].update(n => n++);
  }
  function mouseDoubleClicked() {
    if (mouse.x < 0 || mouse.x > innerWidth || mouse.y < 0 || mouse.y > elementHeight)
      return;
    let row = Math.floor(mouse.y / innerHeight);
    let col = Math.floor(mouse.x / innerWidth);
    
    teleScoreFail[(row-1)*3+(col-1)].update(n => n++);

    console.log("clicked");
    console.log(tele_score);
  }
  
</script>

<svelte:window bind:innerHeight bind:innerWidth />
<strong><h1 class="text-red-600 text-center text-5xl">TeleScore</h1></strong>

<Canvas
  width={innerWidth}
  height={350}
  class="object-center"
  on:click={mouseClicked} on:dblclick={mouseDoubleClicked}
>
  <Layer {render} />
</Canvas>

<DefenseButton />

<style>
</style>
