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

    // // Grid width
    // var bw = 120;
    // // Grid height
    // var bh = 120;
    // // Padding
    // var p = 10;
      // @ts-ignore
    $: render = ({ context, width, height }) => {
      // The number of boxes is determined by the ratio between the incrementer of x, and the base/height of the grid

      // for (let y = 0; y <= bw; y += 40) {
      //   context.moveTo(0.5 + y + p, p);
      //   context.lineTo(0.5 + y + p, bh + p);
      // }
    
      // for (let x = 0; x <= bh; x += 40) {
      //     context.moveTo(p, 0.5 + x + p);
      //     context.lineTo(bw + p, 0.5 + x + p);
      // }
      // context.strokeStyle = "black";
      // context.stroke();

      const TeleOpScoreBoard = new Image();

      TeleOpScoreBoard.src = "../assets/TeleOpScoring.png";
      TeleOpScoreBoard.onload = () => {
        context.drawImage(TeleOpScoreBoard, 0, 0);
      };
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
  
  <Canvas width={640} height={640} class="object-center">
    <Layer {render} />
  </Canvas>

<button on:touchstart={handleMousedown} on:touchend={handleMouseup} class="border">Defense</button>

<style>
</style>