<script lang="ts">
    import { auto_charge_station } from "$lib/stores/matchScoutStores";
    import ChargeStation from "../ui-components/ChargeStation.svelte"
    
    let selectedOption = 0;

    export function onOption(id : number) {
        auto_charge_station.set(selectedOption = id);
    }
</script>

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
        z-index: 0;
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
</style>