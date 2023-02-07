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

<button on:touchstart={handleMousedown} on:touchend={handleMouseup} on:mousedown={handleMousedown} on:mouseup={handleMouseup} class="border">Defense</button>
