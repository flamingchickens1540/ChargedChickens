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
        background-color: #babab8;
        border-color: gray;
        font-family: "Poppins";
        font-size: 23px;
        border-width: 4px;
        height: 47px;
    }
    .brokeSwitchRight{
        display: flex;
        justify-content: right;
        width: 50%;
    }
    .testBorder{
        display: flex;
        align-items: right;
        justify-content: center;
        width: 50%; 
    }

</style>

