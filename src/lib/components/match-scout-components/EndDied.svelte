<script lang="ts">
    import { died } from "$lib/stores/matchScoutStores";
    import Switch from "$lib/components/ui-components/Switch.svelte";

    let checkedValue = false;

    function handleChangeDead(){
        died.set(!checkedValue);
    }

</script>



<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
<div class="makeBorder">
    <div class = "testBorder">
        <h1> Is Dead</h1>
    </div> 
    <div class= "brokeSwitchRight">
        <Switch bind:checked={checkedValue} on:click = {handleChangeDead}/>
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