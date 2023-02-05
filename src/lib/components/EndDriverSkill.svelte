<script lang="ts">
    import { applyAction } from "$app/forms";
    import { skill } from "$lib/matchScoutStores";
    import { Rating } from "svelte-stars-hover-rating";
    var isOne = false;
</script>

<h1 class="text-orange-400 text-center">EndDriverSkill</h1>

<div class="centerStars">
    <Rating bind:rating={$skill}/>
</div>
<div class="centerRatingStar">
    {$skill} Star(s)
</div>

<style>
    .centerStars {
        display: flex;
        justify-content: center;
        flex-direction: row;
        rotate: -90deg;
        height: 21px;
        width: 423px;
    }

    .centerRatingStar {
        display: flex;
        justify-content: center;
    }
</style>
