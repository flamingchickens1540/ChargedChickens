<script lang="ts">
    import { defense_times } from "$lib/matchScoutStores";
    import FancyButtons from "./FancyButtons.svelte"

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
</script>
  <div class="p-10 grid grid-cols-1 grid-rows-1 ">
    <FancyButtons on:touchstart={handleMousedown} on:touchend={handleMouseup} on:mousedown={handleMousedown} on:mouseup={handleMouseup} text = {"Defense"} bgColor = {"rgb(55, 5, 177)"} height = {"9rem"} width = {"9rem"} amountOfRound = {"50%"}/>
  </div>

<style>
  button {
    color: rgb(255, 255, 255);
    background-color: rgb(55, 5, 177);
    outline-color:rgb(55, 5, 177, .3);
  }
</style>