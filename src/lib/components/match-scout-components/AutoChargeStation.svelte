<script lang="ts">
    import { auto_charge_station } from "$lib/stores/matchScoutStores";
    import ChargeStation from "../ui-components/ChargeStation.svelte"

    let selectedOption = 0;

    export function onOption(id : number) {
        auto_charge_station.set(selectedOption = id);
    }
</script>

<ChargeStation handleClick={onOption}></ChargeStation>