<script lang="ts">
    import { tele_score } from "$lib/matchScoutStores";
	let clicked: any;
    let miliSecondsArr: number[];
    let miliSeconds: number;

    function handleMousedown() {
        console.log("test");
        clicked = true;
        miliSeconds = 0;
        miliSeconds += 1;
        while ( clicked ) { 
            setInterval(() => miliSeconds += 1, 1);
            console.log(miliSeconds);
        }
        clearInterval;

        miliSecondsArr.push(miliSeconds);
        console.log(miliSeconds);
	}

    function handleMouseup() {
        clicked = false;
    }
</script>

<h1 class="text-red-600 text-center">TeleScore</h1>

<button on:touchstart={handleMousedown} on:touchend={handleMouseup} on:click={handleMousedown}>Test</button>

<style>
</style>