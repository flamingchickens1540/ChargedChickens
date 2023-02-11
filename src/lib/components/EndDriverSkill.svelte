<script lang="ts">
    import { applyAction } from "$app/forms";
    import { skill } from "$lib/matchScoutStores";
    import Rating from "./Rating.svelte";
</script>

<link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet" />
<div class = "makeBorder">
    <div class="testBorder"> Driver Skills</div>
    <div class="centerStars">
        <Rating bind:rating={$skill} />
    </div>
</div>

<style>
    .makeBorder{
        display: flex;
        background-color: #dae5e8;
        border-color: black;
        border-width: 4px;
        border-radius: 0.5rem;
    }
    .centerStars {
        display: flex;
        justify-content: space-around;
        align-content: center;
        width: 50%;
        border-left: none;
        font-family: "Poppins";
        font-size: 17px;
        height: 47px;
    }

    .testBorder {
        display: flex;
        float: left;
        justify-content: space-around;
        width: 50%;
        font-family: "Poppins";
        align-items: center;
        font-size: 23px;
        border-right: none;
    }
</style>
