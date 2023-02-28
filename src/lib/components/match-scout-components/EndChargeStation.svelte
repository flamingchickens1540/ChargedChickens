<script lang="ts">
    import { info } from "$lib/stores/generalStores";
    import { end_charge_station } from "$lib/stores/matchScoutStores";
    import ChargeStation from "../ui-components/ChargeStation.svelte"

    let selectedOption = 0;

    function onOption(id : number) {
        end_charge_station.set(selectedOption = id);
    }
</script>

<div class = "alignTitle">
    <div class = "endgameTitle"> Endgame </div>
    <div class = "endgameTitleNumbers"> {$info.robot?.team_key} </div>
</div>

<ChargeStation handleClick={onOption}></ChargeStation>

<style>

    .makeColumnButtons{
        display: flex;
        flex-direction: column;
        border-radius: 0.5vw;
        border-color: black;
        border-width: 4px;
        border-radius: 0.5rem;
        pointer-events: none;
        background-color: #efdcdc;
        z-index: 1;
    }
    
    .buttonsTitle{
        text-align: center;
        font-weight: 700;
        font-family: "Poppins";
        font-size: 23px;
        height: 51px;
        border-color: black;
        padding-top: 6px;
        z-index: 0;
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
</style>