<script lang="ts">
    import { polish } from '$lib/stores/pitScoutStores'
    import Rating from '../ui-components/Rating.svelte'
</script>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
<link
    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
    rel="stylesheet"
/>

<div class="makeBorder">
    <div class="testBorder">
        <b> Polish </b>
    </div>
    <div class="centerStars">
        <div class="testThings">
            <Rating bind:rating={$polish} />
        </div>
    </div>
</div>

<style>
    .makeBorder {
        display: flex;
        border-color: black;
        background-color: #efdcdc;
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
        align-items: center;
        width: 60%;
        font-family: 'Poppins';
        font-size: 17px;
        height: 43px;
        padding-right: 12px;
    }

    .testBorder {
        display: flex;
        float: left;
        justify-content: left;
        text-indent: 11px;
        width: 50%;
        font-family: 'Poppins';
        align-items: center;
        font-size: 23px;
        border-right: none;
        font-weight: 100;
    }
</style>
