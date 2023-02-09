<script lang="ts">
  import TeleOpScoring from "$lib/assets/TeleOpScoring.png";
  import { tele_high_center_fail, tele_high_center_succeed, tele_high_left_fail, tele_high_left_succeed, tele_high_right_fail, tele_high_right_succeed, tele_low_center_fail, tele_low_center_succeed, tele_low_left_fail, tele_low_left_succeed, tele_low_right_fail, tele_low_right_succeed, tele_mid_center_fail, tele_mid_center_succeed, tele_mid_left_fail, tele_mid_left_succeed, tele_mid_right_fail, tele_mid_right_succeed, tele_score } from "../matchScoutStores";

  import { Canvas, Layer } from "svelte-canvas";
  import DefenseButton from "./DefenseButton.svelte";

  let innerHeight = window.innerHeight;
  let innerWidth = window.innerWidth;
  let elementHeight = 0;

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
  
  let mouse : {
    x : number,
    y : number
  };
  // @ts-ignore
  $: render = ({ context, width, height }) => {
    const TeleOpScoreBoard = new Image();

    TeleOpScoreBoard.src = TeleOpScoring;
    TeleOpScoreBoard.onload = () => {
      context.drawImage(TeleOpScoreBoard, 0, 0, width, height);
    };
  };

  function getMousePos(evt: { clientX: number; clientY: number; }) {
    const canvas: HTMLCollection = document.getElementsByClassName("object-center");
    const rect: DOMRect = canvas[0].getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }
  // TODO: Jack code to be implemented on canvas
  //@ts-ignore
  function mouseWithinBounds() : boolean {
    return mouse.x < 0 && mouse.x > innerWidth && mouse.y < 0 && mouse.y > elementHeight;
  }

  function mouseClicked(e : MouseEvent) {
    mouse = getMousePos(e);
    if (!mouseWithinBounds())
      return;
    const row = Math.floor(mouse.y / elementHeight * ROWS);
    const col = Math.floor(mouse.x / innerWidth * COLUMNS);
    console.log(row);
    
    teleScoreSucceed[col + row * COLUMNS].update(n => n++);
  }

  function mouseDoubleClicked() {
    if (!mouseWithinBounds())
      return;

    const row = Math.floor(mouse.y / elementHeight * ROWS);
    const col = Math.floor(mouse.x / innerWidth * COLUMNS);
    console.log(row);
    
    teleScoreFail[col + row * COLUMNS].update(n => n++);

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
