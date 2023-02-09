<script lang="ts">
    import { tele_score, defense_times } from "$lib/matchScoutStores";
	
    let miliSecondsArr: number[] = [];
    let initialTime : number;
  
    
    function handleMousedown() {
        initialTime = Date.now();
	}
    function handleMouseup() {
      miliSecondsArr.push(Date.now() - initialTime)
    }

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
    };
    
    //Jack code
    // function mouseClicked() {
    //   if (mouseX < 0 || mouseX > 900 || mouseY < 0 || mouseY > 300) return;
    //   row = Math.floor(mouseY / 100);
    //   col = Math.floor(mouseX / 100);
    //   if (socket != null) socket.emit("click", { row, col });
    // }
</script>

<h1 class="text-red-600 text-center">TeleScore</h1>

<!-- <div class="border w-20 grid-flow-row-dense grid-cols-3 grid-rows-3">
    <Square></Square>
    <Square></Square>
    <Square></Square>
    <Triangle></Triangle>
    <Triangle></Triangle>
    <Triangle></Triangle>
    <TriangeSquare></TriangeSquare>
    <TriangeSquare></TriangeSquare>
    <TriangeSquare></TriangeSquare>
</div> -->
  
  <Canvas width={640} height={640} class="object-center">
    <Layer {render} />
  </Canvas>

<button on:touchstart={handleMousedown} on:touchend={handleMouseup} class="border">Defense</button>

<style>
</style>