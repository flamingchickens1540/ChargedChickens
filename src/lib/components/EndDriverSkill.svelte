<script lang="ts">
    import { applyAction } from "$app/forms";
    import { skill } from "$lib/matchScoutStores";
    import { Rating } from "svelte-stars-hover-rating";



</script>

<h1 class="text-orange-400 text-center">How Skilled was the Driver in the EndGame?</h1>

<div class="centerStars">
    <Rating bind:rating={$skill}/>
</div>
<div class="centerRatingStar">
    {$skill} Star{#if $skill != 1}s{/if}
</div>

<style>
    .centerStars{
        display: flex;
        justify-content: center;
        flex-direction: row;
        rotate: -90deg;
        height: 21px;
        width: 427px;
    }

    .centerRatingStar {
        display: flex;
        justify-content: center;
    }
</style>