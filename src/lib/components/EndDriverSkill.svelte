<script lang="ts">
    import { applyAction } from "$app/forms";
    import { skill } from "$lib/matchScoutStores";
    import { Rating } from "svelte-stars-hover-rating";
</script>

<h1 class="text-orange-400 text-center">EndDriverSkill</h1>

<div class = "centerStars">
    <Rating bind:rating={$skill} />
</div>

<style>

    .centerStars{
        display: flex;
        justify-content: center;
        flex-direction: row;
        rotate: -90deg;
    }

</style>