<script lang="ts">
    import { high_left, high_center, high_right, mid_left, mid_center, mid_right, low_left, low_center, low_right } from "$lib/stores/pitScoutStores";
    import TeleOpScoring from "$lib/assets/TeleOpScoring-removebg-preview.png";
    import { onMount } from "svelte"
    import { Canvas, Layer } from "svelte-canvas"
    import { team_number } from "$lib/stores/matchScoutStores"
  
  let scoring = [
    high_left, 
    high_center, 
    high_right, 
    mid_left, 
    mid_center, 
    mid_right, 
    low_left, 
    low_center, 
    low_right
  ]
  let click: {row: number, col: number};
  // @ts-ignore
  $: render = ({ context }) => {

    const AutoScoreBoard = new Image();
    AutoScoreBoard.src = TeleOpScoring;

    AutoScoreBoard.onload = () => {
        context.drawImage(AutoScoreBoard, 0, 0, outerWidth, outerWidth)

  }       
};


function mouseClicked(mouse: MouseEvent) {

if (mouse.offsetY == outerWidth || mouse.offsetX == outerWidth) return
    click = { row: Math.floor(mouse.offsetY / outerWidth * 3), col: Math.floor(mouse.offsetX / outerWidth * 3) }

    scoring[click.col + click.row * 3].set(true);
}

onMount(() => {
  outerWidth = document.getElementById("header")?.clientWidth || window.outerWidth
  outerHeight = document.getElementById("header")?.clientHeight || window.outerHeight 

  // outerWidth -= 20;
  // outerHeight -= 20;
  // outerHeight /= 1.2;
  // outerWidth /= 1.2;
})

</script>

<!-- <svelte:window bind:outerHeight bind:outerWidth/> -->
<div class="grid grid-rows-1 grid-cols-1 place-items-center">
  <h1 id="header" class="text-purple-600 text-center text-4xl font-extrabold">Where can it score?</h1>
</div>

<div class="makeGood">
    <Canvas
    class=""
    width={outerWidth}
    height={outerWidth}   
    on:click={mouseClicked}
    >
      <Layer {render} />
    </Canvas>
</div>


<style>

div {
  font-family: "Poppins";
}
</style>


