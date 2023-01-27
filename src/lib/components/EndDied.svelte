<script lang="ts">
    import { died } from "$lib/matchScoutStores";
    
    function toggleDied(die : boolean) {
        died.set(die);
    }
</script>

<center>
    <button on:touchend={() => toggleDied(true)}>Yes</button>
    <button on:touchend={() => toggleDied(false)}>No</button>
</center>
<!-- <h1 class="text-blue-500 text-center">EndDied</h1> -->