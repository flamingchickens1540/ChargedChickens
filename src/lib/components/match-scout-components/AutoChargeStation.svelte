<script lang="ts">
    import { auto_charge_station } from "$lib/stores/matchScoutStores";
    import ChargeStationOption from "../ui-components/ChargeStationOption.svelte";

    let selectedOption = 0;

    function onOption(id : number) {
        auto_charge_station.set(selectedOption = id);
    }
</script>

<div class = "makeColumnButtons">
    <div class = "buttonsTitle"> 
        Charge Station End 
    </div>
    <ChargeStationOption selectedOption={selectedOption} id={0} name="Not Attempted" clickHandler={onOption}></ChargeStationOption>
    <ChargeStationOption selectedOption={selectedOption} id={1} name="Failed" clickHandler={onOption}></ChargeStationOption>
    <ChargeStationOption selectedOption={selectedOption} id={2} name="Docked" clickHandler={onOption}></ChargeStationOption>
    <ChargeStationOption selectedOption={selectedOption} id={3} name="Engaged" clickHandler={onOption} edgeOption={true}></ChargeStationOption>
</div>

<style>

    .makeColumnButtons{
        display: flex;
        flex-direction: column;
        border-radius: 0.5vw;
        border-color: black;
        border-width: 4px;
        border-radius: 0.5rem;
    }
    
    .buttonsTitle{
        text-align: center;
        font-weight: 700;
        font-family: "Poppins";
        font-size: 23px;
        height: 51px;
        border-color: black;
        padding-top: 6px;
        background-color: #efdcdc;
        z-index: -1;
    }

    .endgameTitle{
        display: flex;
        font-family: "Poppins";
        font-size: 36px; 
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
        font-size: 36px; 
        padding-top: 11px;
        width: 50%;
        justify-content: right;
        padding-right: 11px;
    }
</style>
