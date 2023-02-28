<script lang="ts">
    import { info } from "$lib/stores/generalStores";
    import { end_charge_station } from "$lib/stores/matchScoutStores";
    import ChargeStation from "../ui-components/ChargeStation.svelte"
    function onOption(id : number) {
        end_charge_station.set(id);
    }
</script>

<div class = "alignTitle">
    <div class = "endgameTitle"> Endgame </div>
    <div class = "endgameTitleNumbers"> {$info.robot?.team_key} </div>
</div>

<ChargeStation handleClick={onOption}></ChargeStation>