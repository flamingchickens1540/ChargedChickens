<script lang="ts">
    import { tele_score } from "$lib/matchScoutStores";
	
    let miliSecondsArr: number[] = [];

    let initialTime : number;
    
    function handleMousedown() {
        initialTime = Date.now();
	}

    function handleMouseup() {
        miliSecondsArr.push(Date.now() - initialTime);
    }
</script>

<center>
    <button class="text-red-600 text-center" on:touchstart={handleMousedown} on:touchend={handleMouseup}>Test</button>
</center>
<style>
</style>