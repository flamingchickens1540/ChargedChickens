<script lang="ts">
  import TeleOpScoring from '$lib/assets/Teleop.png'
  import SucceessFailure from '$lib/assets/SuccessFailure.png'
  import {
      cycle_times,
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
  } from '$lib/stores/matchScoutStores'

  import { Canvas, Layer } from 'svelte-canvas'
  import { onMount } from 'svelte'
  import { info } from '$lib/stores/generalStores'
  import { defense_times } from '$lib/stores/matchScoutStores'

  let outerHeight: number
  let outerWidth: number

  let click: { row: number, col: number } | null = null;

  let initialDefenseTime: number
  let lastCycleTimestamp: number

  const teleScoreSucceed = [
      tele_high_left_succeed,
      tele_high_center_succeed,
      tele_high_right_succeed,
      tele_mid_left_succeed,
      tele_mid_center_succeed,
      tele_mid_right_succeed,
      tele_low_left_succeed,
      tele_low_center_succeed,
      tele_low_right_succeed,
  ]
  const teleScoreFail = [
      tele_high_left_fail,
      tele_high_center_fail,
      tele_high_right_fail,
      tele_mid_left_fail,
      tele_mid_center_fail,
      tele_mid_right_fail,
      tele_low_left_fail,
      tele_low_center_fail,
      tele_low_right_fail,
  ]

  // @ts-ignore
  $: render = ({ context }) => {
      const TeleOpScoreBoard = new Image()
      const SuccessFailureImage = new Image()

      TeleOpScoreBoard.src = TeleOpScoring;
      SuccessFailureImage.src = SucceessFailure;

      if (click) {
          SuccessFailureImage.onload = () => {
              context.drawImage(SuccessFailureImage, 0, 0, outerWidth, outerWidth)
          }
      } else {
          TeleOpScoreBoard.onload = () => {
              context.drawImage(TeleOpScoreBoard, 0, 0, outerWidth, outerWidth)
          }
      }       
  }

  function handleMouseup() {
      if (!click) {
          const time = Date.now() - initialDefenseTime
          if (time > 500) $defense_times.push(time / 1000)
      } else { click = null }
  }

  function handleMousedown() {
      if (!click) {
          initialDefenseTime = Date.now()
      }
  }

  function mouseClicked(mouse: MouseEvent) {
      if (mouse.offsetY == outerWidth || mouse.offsetX == outerWidth) return

      if (!click) {
          click = { row: Math.floor(mouse.offsetY / outerWidth * 3), col: Math.floor(mouse.offsetX / outerWidth * 3) }
      } else {
          if (mouse.offsetX < outerWidth / 2) {
              teleScoreSucceed[click.col + click.row * 3].update(n => n + 1);

              const timestamp = Date.now();
              if (lastCycleTimestamp != null) $cycle_times.push((timestamp - lastCycleTimestamp) / 1000);
              lastCycleTimestamp = timestamp;
          }
          else {
              teleScoreFail[click.col + click.row * 3].update(n => n + 1);
          }

          click = null;
      }
  }

  onMount(() => {
      outerWidth =
          document.getElementById('header')?.clientWidth || window.outerWidth
      outerHeight =
          document.getElementById('header')?.clientHeight ||
          window.outerHeight
  })
</script>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
<link
  href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
  rel="stylesheet"
/>

<div class="grid grid-rows-1 grid-cols-1 place-items-center">
  <h1 id="header" class="text-purple-600 text-center text-5xl font-extrabold">Telescore {$info.robot?.team_key}</h1>
</div>

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

<div
  class="p-5 grid grid-cols-1 grid-rows-1 place-items-center"
>
  <button
  style="background-color: blueviolet"
      class="h-32 w-80 lg:flex-grow sm:flex-shrink rounded-full unselectable"
      on:touchstart={handleMousedown}
      on:touchend={handleMouseup}
      >{click ? "Back" : "Defense"}</button
  >
</div>

<style>
  div {
      font-family: 'Poppins';
  }

  .unselectable {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

button {
  color: rgb(255, 255, 255);
  background-color: var(--btn-color);
  outline-color:rgb(55, 5, 177, .3);
}
</style>