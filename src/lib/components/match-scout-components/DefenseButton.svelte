<script lang="ts">

    /**
     * 
     * @todo
     * - Make things responsively scale
    */

    import { defense_times } from "$lib/stores/matchScoutStores";

    let miliSecondsArr: number[] = [];
    let initialTime : number;
    let color: string = "#3705B1";

    /**
     * Sets initial time to the current time
     * 
     * @complete
     */
    function handleMousedown() {
        color = "#000033";
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
      color = "#3705B1";
      console.log($defense_times);
    }

</script>
  <div style="--btn-color: {color}" class="p-10 grid grid-cols-1 grid-rows-1 place-items-center">
    <button class="h-32 w-80 lg:flex-grow sm:flex-shrink rounded-full outline outline-10 unselectable" on:touchstart={handleMousedown} on:touchend={handleMouseup} on:mousedown={handleMousedown} on:mouseup={handleMouseup}>Defense</button>
  </div>

<style>
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