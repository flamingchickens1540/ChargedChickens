<script lang="ts">
    import { info } from "$lib/stores/generalStores";
    import { end_charge_station } from "$lib/stores/matchScoutStores";
    import ChargeStation from "../ui-components/ChargeStation.svelte"
    function onOption(id : number) {
        end_charge_station.set(id);
    }
</script>
<<<<<<< HEAD

<div class = "alignTitle">
    <div class = "endgameTitle"> Endgame </div>
    <div class = "endgameTitleNumbers"> {$info.robot?.team_key} </div>
</div>

<ChargeStation handleClick={onOption} name="End Charge Station"></ChargeStation>
=======
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
<div class="grid grid-rows-1 grid-cols-1 place-items-center">
    <h1 id="header" class="text-purple-600 text-center text-5xl font-extrabold">Endgame {$info.robot?.team_key}</h1>
  </div>

<div class = "makeColumnButtons">
    <div class = "buttonsTitle"> 
        Charge Station End 
    </div>
    <button class = "optionButtons" on:click = {handleNot} style = "background-color: {backgroundColorsButtons[0]}"> Not Attempted </button>
    <button class = "optionButtons" on:click = {handleFailed} style = "background-color: {backgroundColorsButtons[1]}"> Failed </button>
    <button class = "optionButtons" on:click = {handleDocked} style = "background-color: {backgroundColorsButtons[2]}"> Docked </button>
    <button class = "optionSpecialButtons" on:click = {handleEngaged} style = "background-color: {backgroundColorsButtons[3]}"> Engaged </button>
</div>

<style>
    div {
        font-family: 'Poppins';
    }
    .makeColumnButtons{
        display: flex;
        flex-direction: column;
    }
    
    .buttonsTitle{
        text-align: center;
        font-weight: 700;
        font-family: "Poppins";
        font-size: 23px;
        border-bottom-width: 2px;
        height: 51px;
        border-color: black;
        padding-top: 6px;
        background-color: #efdcdc;
        border-width: 2px;
        border-top-right-radius: 0.3rem;
        border-top-left-radius: 0.3rem;
    }

    .endgameTitle{
        display: flex;
        font-family: "Poppins";
        font-size: 24px; 
        padding-top: 11px;
        padding-left: 2px;      
        width: 50%;
    }

    .alignTitle{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    .endgameTitleNumbers{
        display: flex;
        font-family: "Poppins";
        font-size: 24px; 
        padding-top: 11px;
        width: 50%;
        justify-content: right;
        padding-right: 11px;
    }
    .optionButtons{
        height: 47px;
        border-bottom-width: 2px;
        border-color: black;
        text-align: left;
        text-indent: 10px;
        font-family: "Poppins";
        font-size: 23px;
        border-left-width: 2px;
        border-right-width: 2px;
    }
    .optionSpecialButtons{
        height: 47px; 
        text-align: left;
        text-indent: 10px;
        font-family: "Poppins";
        font-size: 23px;
        border-bottom-right-radius: 0.3rem;
        border-bottom-left-radius: 0.3rem;
        border-left-width: 2px;
        border-right-width: 2px;
        border-bottom-width: 2px;
        border-color: black;
    }
</style>
>>>>>>> 49ca54c42545aee50e501ab53530b8e7c2a40edd
