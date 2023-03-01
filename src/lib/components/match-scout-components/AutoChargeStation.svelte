<script lang="ts">
    import { auto_charge_station } from "$lib/stores/matchScoutStores";
    import ChargeStation from "../ui-components/ChargeStation.svelte"
    export function onOption(id : number) {
        auto_charge_station.set(id);
    }
</script>
<div style="padding-bottom:4vw">
    <ChargeStation handleClick={onOption} name="Auto Charge Station"></ChargeStation>
</div>