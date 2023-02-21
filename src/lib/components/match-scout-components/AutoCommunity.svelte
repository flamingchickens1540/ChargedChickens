


<script lang="ts">
    import { auto_community } from "$lib/stores/matchScoutStores";
    import Switch from "$lib/components/ui-components/Switch.svelte";

    let broken = false;

    function handleChangeBroke(){
        auto_community.set(!broken); 
    }
</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">

<div class="makeBorder">
    <div class = "testBorder">
        <h1> Is Comi </h1>
    </div> 
    <div class= "brokeSwitchRight">
        <Switch bind:checked={broken} on:click = {handleChangeBroke}/>
    </div>
</div>

<style>
    .makeBorder{
        display: flex;
        font-family: "Poppins";
        font-size: 23px;
        height: 41px;
    }
    .brokeSwitchRight{
        display: flex;
        justify-content: right;
        width: 50%;
        padding-right: 6px;
        border-color: black;
        height: 41px;
        align-content: center;
        align-items: center;
    }
    .testBorder{
        display: flex;
        justify-content: left;
        width: 50%; 
        text-indent: 11px;
        border-color: black;
        height: 41px;
        align-items: center;
        align-content: center;
    }

</style>



