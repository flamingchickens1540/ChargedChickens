<script lang="ts">
    import { died } from "$lib/stores/matchScoutStores";
    import Switch from "$lib/components/ui-components/Switch.svelte";

    let checkedValue = false;
    
    function clickHandle() {
        died.set(!checkedValue);
    }
</script>



<link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'>
<div class="makeBorder">
    <div class = "testBorder">
        <h1> Is Dead</h1>
    </div> 
    <div class= "brokeSwitchRight">
        <Switch bind:checked={checkedValue} on:click={clickHandle}/>
    </div>
</div>
<style>
    .makeBorder{
        display: flex;
        align-items: center;
        font-family: "Poppins";
        font-size: 23px;
        height: 41px;
        border-top: none;
    }
    .brokeSwitchRight{
        display: flex;
        padding-right: 6px;
        justify-content: right;
        width: 50%;
    }
    .testBorder{
        display: flex;
        align-items: right;
        margin-left: 11px;
        justify-content: left;
        width: 50%; 
    }

</style>