<script lang="ts">
    import { info } from "$lib/stores/generalStores";
    import { end_charge_station } from "$lib/stores/matchScoutStores";
    import ChargeStation from "../ui-components/ChargeStation.svelte"
    function onOption(id : number) {
        end_charge_station.set(id);
    }
</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
<div class="grid grid-rows-1 grid-cols-1 place-items-center">
    <h1 id="header" class="text-purple-600 text-center text-5xl font-extrabold">Endgame {$info.robot?.team_key}</h1>
  </div>

<ChargeStation handleClick={onOption} name="End Charge Station"></ChargeStation>

<style>
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
</style>
