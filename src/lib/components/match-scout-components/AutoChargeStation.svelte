<script lang="ts">
    import { auto_charge_station } from "$lib/stores/matchScoutStores";
    import ChargeStation from "$lib/components/ui-components/ChargeStation.svelte"
    export function onOption(id : number) {
        auto_charge_station.set(id);
    }

</script>
<<<<<<< HEAD
<div style="">
=======
<div>
>>>>>>> e2bb25dc698a4f8ce2b62a860373687095a3c94d
    <ChargeStation handleClick={onOption}></ChargeStation>
</div>
