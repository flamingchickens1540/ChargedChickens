<script lang="ts">
  import TeleOpScoring from "$lib/assets/TeleOpScoring.png";
  import { tele_high_center_fail, tele_high_center_succeed, tele_high_left_fail, tele_high_left_succeed, tele_high_right_fail, tele_high_right_succeed, tele_low_center_fail, tele_low_center_succeed, tele_low_left_fail, tele_low_left_succeed, tele_low_right_fail, tele_low_right_succeed, tele_mid_center_fail, tele_mid_center_succeed, tele_mid_left_fail, tele_mid_left_succeed, tele_mid_right_fail, tele_mid_right_succeed, tele_score } from "../matchScoutStores";

  import { Canvas, Layer } from "svelte-canvas";
  import DefenseButton from "./DefenseButton.svelte";

  let outerHeight : number;
  let outerWidth : number;
  const canvas = document.getElementsByTagName("canvas")[0];

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
  // TODO: Jack code to be implemented on canvas
  //@ts-ignore
  function mouseWithinBounds(mouse : MouseEvent) : boolean {
    return mouse.offsetX >= 0 && mouse.offsetX <= outerWidth && mouse.offsetY >= 0 && mouse.offsetY <= outerHeight;
  }

  function mouseClicked(mouse : MouseEvent) {
    if (!mouseWithinBounds(mouse))
      return;
    const row = Math.floor(mouse.offsetY / outerWidth * 3);
    const col = Math.floor(mouse.offsetX / outerWidth * 3);
    
    teleScoreSucceed[col + row * 3].update(n => n++);
  }

  function mouseDoubleClicked(mouse : MouseEvent) {
    if (!mouseWithinBounds(mouse))
      return;

    const row = Math.floor(mouse.offsetY / outerWidth * 3);
    const col = Math.floor(mouse.offsetX / outerWidth * 3);
    console.log(row);
    
    teleScoreFail[col + row * 3].update(n => n++);

    console.log("clicked");
    console.log(tele_score);
  }
  
</script>

<svelte:window bind:outerHeight bind:outerWidth/>
<strong><h1 class="text-red-600 text-center text-5xl">TeleScore</h1></strong>

<Canvas
  width={outerWidth}
  height={outerWidth}
  class="object-center"
  on:mousedown={mouseClicked} on:dblclick={mouseDoubleClicked}
>
  <Layer {render} />
</Canvas>

<DefenseButton />

<style>
</style>
