<script lang="ts">
    import { defense_times } from "$lib/matchScoutStores";

    let miliSecondsArr: number[] = [];
    let initialTime : number;

    function handleMousedown() {
        initialTime = Date.now();
	}
    function handleMouseup() {
      miliSecondsArr.push(Date.now() - initialTime)
      defense_times.update(() => miliSecondsArr);
      console.log($defense_times);
    }
</script>
  <div class="p-10 grid grid-cols-1 grid-rows-1 ">
    <button class="h-36 w-36 rounded-full outline outline-10" on:touchstart={handleMousedown} on:touchend={handleMouseup} on:mousedown={handleMousedown} on:mouseup={handleMouseup}>Defense</button>

  </div>

<style>
  button {
    color: rgb(255, 255, 255);
    background-color: rgb(55, 5, 177);
    outline-color:rgb(55, 5, 177, .3);
  }
</style>