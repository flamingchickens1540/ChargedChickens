<script lang="ts">
  import TeleOpScoring from "$lib/assets/TeleOpScoring.png";
  import { tele_high_left_succeed, tele_score } from "../matchScoutStores";

  import { Canvas, Layer } from "svelte-canvas";
  import DefenceButton from "./DefenceButton.svelte";

  let innerHeight = 0;
  let innerWidth = 0;
  let elementHeight = 0;

  let mouse = { x: 0, y: 0 };
  // @ts-ignore
  $: render = ({ context, width, height }) => {
    const TeleOpScoreBoard = new Image();

    TeleOpScoreBoard.src = TeleOpScoring;
    TeleOpScoreBoard.onload = () => {
      context.drawImage(TeleOpScoreBoard, 0, 0, width, height);
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
    
    if (col == 1) {
      if (row == 1) {
        tele_score.tele_high_left_succeed.update(n => n++);
        console.log("Upper Left");
        console.log($tele_high_left_succeed);
      } else if (row == 2) {
        tele_score.tele_mid_left_succeed.update(n => n++);
      } else if (row == 3) {
        tele_score.tele_low_left_succeed.update(n => n++);
      } 
    } else if (col == 2) {
      if (row == 1) {
        tele_score.tele_high_center_succeed.update(n => n++);
      } else if (row == 2) {
        tele_score.tele_mid_center_succeed.update(n => n++);
      } else if (row == 3) {
        tele_score.tele_low_center_succeed.update(n => n++);
      }
    } else if (col == 2) {
      if (row == 1) {
        tele_score.tele_high_right_succeed.update(n => n++);
      } else if (row == 2) {
        tele_score.tele_mid_right_succeed.update(n => n++);
      } else if (row == 3) {
        tele_score.tele_low_right_succeed.update(n => n++);
      }
    } 
    console.log("clicked");
    console.log(tele_score);
  }

  function mouseDoubleClicked() {
    if (mouse.x < 0 || mouse.x > innerWidth || mouse.y < 0 || mouse.y > elementHeight)
      return;
    let row = Math.floor(mouse.y / innerHeight);
    let col = Math.floor(mouse.x / innerWidth);
    
    if (col == 1) {
      if (row == 1) {
        tele_score.tele_high_left_fail.update(n => n++);
      } else if (row == 2) {
        tele_score.tele_mid_left_fail.update(n => n++);
      } else if (row == 3) {
        tele_score.tele_low_left_fail.update(n => n++);
      } 
    } else if (col == 2) {
      if (row == 1) {
        tele_score.tele_high_center_fail.update(n => n++);
      } else if (row == 2) {
        tele_score.tele_mid_center_fail.update(n => n++);
      } else if (row == 3) {
        tele_score.tele_low_center_fail.update(n => n++);
      }
    } else if (col == 2) {
      if (row == 1) {
        tele_score.tele_high_right_fail.update(n => n++);
      } else if (row == 2) {
        tele_score.tele_mid_right_fail.update(n => n++);
      } else if (row == 3) {
        tele_score.tele_low_right_fail.update(n => n++);
      }
    }
    console.log("clicked");
    console.log(tele_score);
  }
  
</script>

<svelte:window bind:innerHeight bind:innerWidth />

<h1 class="text-red-600 text-center">TeleScore</h1>

<Canvas
  width={innerWidth}
  height={450}
  class="object-center"
  on:click={mouseClicked} on:dblclick={mouseDoubleClicked}
>
  <Layer {render} />
</Canvas>

<DefenceButton />

<style>
</style>
