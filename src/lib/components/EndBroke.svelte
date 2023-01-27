<script lang="ts">
    import { broke } from "$lib/matchScoutStores";
    
    function toggleBreak(broken : boolean) {
        broke.set(broken);
    }
</script>

<center>
    <button on:touchend={() => toggleBreak(true)}>Yes</button>
    <button on:touchend={() => toggleBreak(false)}>No</button>
</center>
<!-- <h1 class="text-yellow-400 text-center">EndBroke</h1> -->