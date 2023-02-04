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

    import { Canvas, Layer } from 'svelte-canvas';

      // @ts-ignore
    $: render = ({ context, width, height }) => {
      const TeleOpScoreBoard = new Image();

      TeleOpScoreBoard.src = "../assets/TeleOpScoring.png";
      TeleOpScoreBoard.onload = () => {
        context.drawImage(TeleOpScoreBoard, 0, 0);
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

<h1 class="text-red-600 text-center">TeleScore</h1>
  
  <Canvas width={640} height={640} class="object-center">
    <Layer {render} />
  </Canvas>

<button on:touchstart={handleMousedown} on:touchend={handleMouseup} class="border">Defense</button>

<style>
</style>