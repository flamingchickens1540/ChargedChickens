<script lang="ts">
    import { broke } from "$lib/stores/matchScoutStores";
    import Switch from "$lib/components/ui-components/Switch.svelte";

    let broken = false;
    
    function clickHandle() {
        //!broken is used because onclick is triggered before the bind
        broke.set(!broken);
    }
</script>

<link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'>
<div class="makeBorder">
    <div class = "testBorder">
        <h1> Is Broken?</h1>
    </div> 
    <div class= "brokeSwitchRight">
        <Switch bind:checked={broken} on:click={clickHandle}/>
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
        padding-right: 6px;
        border-bottom-width: 2px;
        border-color: black;
        height: 47px;
        align-content: center;
        align-items: center;
    }
    .testBorder{
        display: flex;
        align-items: right;
        justify-content: left;
        width: 50%; 
        text-indent: 11px;
        padding-top: 6px;
        border-bottom-width: 2px;
        border-color: black;
        height: 47px;
    }

</style>

