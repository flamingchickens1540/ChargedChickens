<script lang="ts">
  import { slippery_wheels } from "$lib/stores/pitScoutStores";
  import Switch from "../ui-components/Switch.svelte";
</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin = "">
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">



<div class="makeBorder">
    <div class = "testBorder">
        <h1> Wheels Slippery</h1>
    </div> 
    <div class= "brokeSwitchRight">
        <Switch bind:checked={$slippery_wheels}/>
    </div>
</div>
<style>
    .makeBorder{
        display: flex;
        background-color: #efdcdc;
        border-color: black;
        border-width: 2px;
        font-size: 23px;
        font-family: "Poppins";
        border-radius: 0.5rem;
        width: 341px;
    }
    .brokeSwitchRight{
        display: flex;
        justify-content: right;
        width: 30%;
        padding-right: 6px;
        border-color: black;
        height: 61px;
        align-content: center;
        align-items: center;
    }
    .testBorder{
        display: flex;
        justify-content: left;
        width: 70%; 
        text-indent: 11px;
        border-color: black;
        height: 61px;
        align-items: center;
        align-content: center;
    }

</style>