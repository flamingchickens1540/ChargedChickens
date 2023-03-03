<script lang="ts">
  import { high_left, high_center, high_right, mid_left, mid_center, mid_right, low_left, low_center, low_right } from "$lib/stores/pitScoutStores";
  import TeleOpScoring from "$lib/assets/Teleop.png";
  import { onMount } from 'svelte';
  
  const margin = 0.5;
  const padding = 0.25;
  const borderWidth = 0.15;
  
  let outerWidth : number;

  const score = [
    high_left, high_center, high_right, mid_left, mid_center, mid_right, low_left, low_center, low_right
  ]

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
  * Make clicking display a success/fail choice component
  * 
  */
  function mouseClicked(mouse : MouseEvent) {
      if(mouse.offsetY == outerWidth || mouse.offsetX == outerWidth)
          return;

      const row =  Math.floor(mouse.offsetY / outerWidth * 3);
      const col = Math.floor(mouse.offsetX / outerWidth * 3);
      
      score[col + row * 3].update(n => !n);
  }

  onMount(() => {
  outerWidth = window.outerWidth * (100 - margin - padding - borderWidth)/100;
  });
</script>

<div on:mousedown={mouseClicked} style="
background: #F0E6E6;
padding: {padding}rem;
margin: {margin}rem;
border-width:{borderWidth}rem;
border-color: black;
border-radius: 5vw;
">
<img src={TeleOpScoring} alt=""/>
</div>