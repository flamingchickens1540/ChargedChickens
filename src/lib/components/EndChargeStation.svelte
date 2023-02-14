<script lang="ts">
    import { end_charge_station } from "$lib/matchScoutStores";
    var backgroundColorEnd = "#efdcdc";
    var backgroundColorFailed = "#efdcdc";
    var backgroundColorDocked = "#efdcdc";
    var backgroundColorEngaged = "#efdcdc";
    const endChargeStationMessages = [
        "Not Attempted",
        "Failed",
        "Docked",
        "Engaged",
    ];

    function handleNot(){
        end_charge_station.set(0);
        if (backgroundColorEnd == "#efdcdc"){
            backgroundColorEnd = "#7ED957";
        }else{
            backgroundColorEnd = "#efdcdc"; 
        }
    }
    function handleFailed(){
        end_charge_station.set(1);
    }
    function handleDocked(){
        end_charge_station.set(2);
    }
    function handleEngaged(){
        end_charge_station.set(3);
    }
</script>

<h1 class="text-orange-400 text-center">Charge Station Docking - Endgame</h1>
<div class="centerButtonsValue">
    <h1 class="text-center">
        {endChargeStationMessages[$end_charge_station]}
    </h1>
</div>


<div class = "makeColumnButtons">
    <div class = "buttonsTitle"> Charge Station End</div>
    <button class = "optionButtons" on:click = {handleNot} style = "background-color: {backgroundColorEnd}"> Not Attempted </button>
    <button class = "optionButtons" on:click = {handleFailed} style = "background-color: {backgroundColorFailed}"> Failed </button>
    <button class = "optionButtons" on:click = {handleDocked} style = "background-color: {backgroundColorDocked}"> Docked </button>
    <button class = "optionSpecialButtons" on:click = {handleEngaged} style = "background-color: {backgroundColorEngaged}"> Engaged </button>
</div>

<style>

    .makeColumnButtons{
        display: flex;
        flex-direction: column;
        border-color: black;
        border-width: 2px;
        border-radius: 0.5rem;
    }
    
    .buttonsTitle{
        text-align: center;
        font-family: "Poppins";
        font-size: 23px;
        border-bottom-width: 2px;
        height: 47px;
        border-color: black;
        padding-top: 6px;
    }
    .optionButtons{
        height: 47px;
        border-bottom-width: 2px;
        border-color: black;
        text-align: left;
        text-indent: 10px;
        font-family: "Poppins";
        font-size: 23px;
    }
    .optionSpecialButtons{
        height: 47px; 
        text-align: left;
        text-indent: 10px;
        font-family: "Poppins";
        font-size: 23px;
    }
</style>
