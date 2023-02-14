<script lang="ts">
    import { broke } from "$lib/matchScoutStores";
    import Switch from "./Switch.svelte";
    let broken = false;
    
    broke.set(broken);
    
</script>

<link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'>
<div class="makeBorder">
    <div class = "testBorder">
        <h1> Is Broke</h1>
    </div> 
    <div class= "brokeSwitchRight">
        <Switch bind:checked={broken} />
    </div>
</div>


<style>
    .makeBorder{
        display: flex;
        align-items: center;
        font-family: "Poppins";
        font-size: 23px;
        height: 47px;
    }
    .brokeSwitchRight{
        display: flex;
        justify-content: right;
        width: 50%;
        border-bottom-width: 2px;
        border-color: black;
        height: 47px;
        padding-top: 6px;
        padding-left: 6px;
    }
    .testBorder{
        display: flex;
        align-items: right;
        justify-content: left;
        margin-left: 11px;
        width: 50%; 
        padding-top: 6px;
        border-bottom-width: 2px;
        border-color: black;
        height: 47px;
    }

</style>

