<script lang="ts">
    import TeleOpScoring from "$lib/assets/TeleOpScoring.png"
    import { tele_score } from "../matchScoutStores";

    let innerHeight = 0;
    let innerWidth = 0;

    import { Canvas, Layer } from 'svelte-canvas';
    import DefenceButton from "./DefenceButton.svelte";

      // @ts-ignore
    $: render = ({ context, width, height }) => {
      const TeleOpScoreBoard = new Image();

      TeleOpScoreBoard.src = TeleOpScoring;
      TeleOpScoreBoard.onload = () => {
        context.drawImage(TeleOpScoreBoard, 0, 0, width, height);
      };
    };
    
    // TODO: Jack code to be implemented on canvas
    // function mouseClicked() {
    //   if (mouseX < 0 || mouseX > 900 || mouseY < 0 || mouseY > 300) return;
    //   row = Math.floor(mouseY / 100);
    //   col = Math.floor(mouseX / 100);
    //   if (socket != null) socket.emit("click", { row, col });
    // }
</script>

<svelte:window bind:innerHeight bind:innerWidth />

<h1 class="text-red-600 text-center">TeleScore</h1>

<Canvas width={innerWidth} height={450} class="object-center">
  <Layer {render} />
</Canvas>

<DefenceButton></DefenceButton>
<style>
</style>