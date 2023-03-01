<script lang="ts">
    import { auto_charge_station } from "$lib/stores/matchScoutStores";
    import ChargeStation from "../ui-components/ChargeStation.svelte"
    export function onOption(id : number) {
        auto_charge_station.set(id);
    }
</script>

<ChargeStation handleClick={onOption} name="Auto Charge Station"></ChargeStation>