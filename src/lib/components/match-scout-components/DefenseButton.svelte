<script lang="ts">
    import { defense_times } from "$lib/stores/matchScoutStores";

    let miliSecondsArr: number[] = [];
    let initialTime : number;
    /**
     * Gets the current time
     * 
     * @complete
     */
    function handleMousedown() {
        initialTime = Date.now();
	  }
    
    /**
     * Gets the amount of time in miliseconds that the button has been held for
     * 
     * Pushes this value to an array and updates the defense_times store
     * 
     * @complete
     */
    function handleMouseup() {
      miliSecondsArr.push(Date.now() - initialTime)
      defense_times.update(() => miliSecondsArr);
      console.log($defense_times);
    }

    /**
     * @todo
     * - Make things responsively scale
    */
</script>
  <div class="p-10 grid grid-cols-1 grid-rows-1 place-items-center">
    <button class="h-36 w-36 lg:flex-grow sm:flex-shrink rounded-full outline outline-10" on:touchstart={handleMousedown} on:touchend={handleMouseup} on:mousedown={handleMousedown} on:mouseup={handleMouseup}>Defense</button>

  </div>

<style>
  button {
    color: rgb(255, 255, 255);
    background-color: rgb(55, 5, 177);
    outline-color:rgb(55, 5, 177, .3);
  }
</style>