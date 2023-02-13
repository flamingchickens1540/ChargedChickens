<script lang="ts">
    import { skill } from "$lib/stores/matchScoutStores";
    import Rating from "$lib/components/ui-components/Rating.svelte";

</script>

<h1 class="text-orange-400 text-center">How Skilled was the Driver in the EndGame?</h1>

<div class="centerStars">
    <Rating bind:rating={$skill}/>
</div>
<div class="centerRatingStar">
    {$skill}/5 Stars {#if $skill == 0} (They are bad :D) {/if} 
</div>

<style>
    .centerStars{
        display: flex;
        justify-content: center;
    }

    .centerRatingStar {
        display: flex;
        justify-content: center;
    }
</style>