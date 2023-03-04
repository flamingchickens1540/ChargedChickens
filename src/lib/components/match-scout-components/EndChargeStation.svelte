<script lang="ts">
    import { info } from "$lib/stores/generalStores";
    import { end_charge_station } from "$lib/stores/matchScoutStores";
    import ChargeStation from "../ui-components/ChargeStation.svelte"
    function onOption(id : number) {
        end_charge_station.set(id);
    }
</script>

<div class="grid grid-rows-1 grid-cols-1 place-items-center">
    <h1 id="header" class="text-{$info.robot?.alliance}-600 text-center text-4xl font-extrabold">Endgame {$info.robot?.team_key}</h1>
</div>

<ChargeStation handleClick={onOption}></ChargeStation>

<style>
    div {
      font-family: "Poppins";
    }
</style>