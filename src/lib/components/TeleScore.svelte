<script lang="ts">
    import { tele_score } from "$lib/matchScoutStores";
	
    let miliSecondsArr: number[] = [];

    let interval : NodeJS.Timer;

    let time = 0;
    
    function handleMousedown() {
        interval = setInterval(() => console.log(++time), 1);
        time = 0;
	}

    function handleMouseup() {
        miliSecondsArr.push(time);
        clearInterval(interval);
    }
</script>

<center>
    <button class="text-red-600 text-center" on:touchstart={handleMousedown} on:touchend={handleMouseup}>Test</button>
</center>
<style>
</style>