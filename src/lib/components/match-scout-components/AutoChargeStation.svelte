<script lang="ts">
    import { auto_charge_station } from "$lib/stores/matchScoutStores";
    import ChargeStation from "$lib/components/ui-components/ChargeStation.svelte"
    export function onOption(id : number) {
        auto_charge_station.set(id);
    }

</script>
<div>
    <ChargeStation handleClick={onOption}></ChargeStation>
</div>
