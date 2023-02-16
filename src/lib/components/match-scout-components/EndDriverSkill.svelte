<script lang="ts">
    import { applyAction } from "$app/forms";
    import { skill } from "$lib/stores/matchScoutStores";
    import Rating from "$lib/components/ui-components/Rating.svelte";
</script>

<div class = "makeBorder">
    <div class="testBorder"> 
        <b> Driver Skills </b>
    </div>
    <div class="centerStars">
        <div class = "testThings">
            <Rating bind:rating={$skill} />
        </div>
    </div>
</div>

<style>
    .makeBorder{
        display: flex;
        background-color: #efdcdc;
        border-color: black;
        border-width: 2px;
        border-radius: 0.5rem;
        height: 61px;
        align-content: center;
        align-items: center;
    }
    .centerStars {
        display: flex;
        justify-content: space-around;
        align-content: center;
        width: 50%;
        font-family: "Poppins";
        font-size: 17px;
        height: 43px;
        padding-right: 11px;
    }

    .testBorder {
        display: flex;
        float: left;
        justify-content: left;
        text-indent: 11px;
        width: 50%;
        font-family: "Poppins";
        align-items: center;
        font-size: 23px;
        border-right: none;
        font-weight: 100;
    }
</style>
