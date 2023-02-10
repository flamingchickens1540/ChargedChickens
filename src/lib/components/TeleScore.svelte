<script lang="ts">
  import TeleOpScoring from "$lib/assets/TeleOpScoring.png";
  import {
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
    tele_score,
  } from "../matchScoutStores";

  import { Canvas, Layer } from "svelte-canvas";
  import DefenseButton from "./DefenseButton.svelte";

  let innerHeight = 0;
  let innerWidth = 0;
  let elementHeight = 0;

  let teleScoreSucced = [
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
  let teleScoreFail = [
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

  let mouse = { x: 0, y: 0 };
  // @ts-ignore
  $: render = ({ context, width, height }) => {
    const TeleOpScoreBoard = new Image();

    TeleOpScoreBoard.src = TeleOpScoring;
    TeleOpScoreBoard.onload = () => {
      context.drawImage(TeleOpScoreBoard, 0, 0, width, height);
    };
  };

  function getMousePos(evt: { clientX: number; clientY: number }) {
    let canvas: HTMLCollection =
      document.getElementsByClassName("object-center");
    var rect: DOMRect = canvas[0].getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top,
    };
  }
  // TODO: Jack code to be implemented on canvas
  //@ts-ignore
  function mouseClicked(e) {
    mouse = getMousePos(e);
    if (
      mouse.x < 0 ||
      mouse.x > innerWidth ||
      mouse.y < 0 ||
      mouse.y > elementHeight
    )
      return;
    let row = Math.floor(mouse.y / elementHeight);
    console.log(row);
    let col = Math.floor(mouse.x / innerWidth);

    teleScoreSucced[(row - 1) * 3 + (col - 1)].update((n) => n++);
  }
  function mouseDoubleClicked() {
    if (
      mouse.x < 0 ||
      mouse.x > innerWidth ||
      mouse.y < 0 ||
      mouse.y > elementHeight
    )
      return;
    let row = Math.floor(mouse.y / innerHeight);
    let col = Math.floor(mouse.x / innerWidth);

    teleScoreFail[(row - 1) * 3 + (col - 1)].update((n) => n++);

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
  on:click={mouseClicked}
  on:dblclick={mouseDoubleClicked}
>
  <Layer {render} />
</Canvas>
<div class = "flex justify-center">
  <DefenseButton />
</div>

<style>
</style>
