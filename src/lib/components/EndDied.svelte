<script lang="ts">
    import { died } from "$lib/matchScoutStores";


</script>

<h1 class="text-blue-500 text-center">EndDied</h1>
    
    function toggleDied(die : boolean) {
        died.set(die);
    }
</script>

<center>
    <h1 class="text-blue-500 text-center">EndDied</h1>
    <button on:touchend={() => toggleDied(true)}>Yes</button>
    <button on:touchend={() => toggleDied(false)}>No</button>
</center>
