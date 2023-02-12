<script lang="ts">
    import { auto_charge_station } from "$lib/matchScoutStores";

    const autoChargeStationMessages = [
        "Not Attempted",
        "Failed",
        "Docked",
        "Engaged"
    ]
</script>

<h1 class="text-orange-400 text-center">Charge Station Docking - Auto</h1>
<div class="centerButtons">
    <div class="content-center">
        <div>
            <label>
                <input
                    type="radio"
                    bind:group={$auto_charge_station}
                    value=0
                />
                Not Attempted
            </label>
        </div>
        <div>
            <label>
                <input
                    type="radio"
                    bind:group={$auto_charge_station}
                    value=1
                />
                Failed
            </label>
        </div>
        <div>
            <label>
                <input
                    type="radio"
                    bind:group={$auto_charge_station}
                    value=2
                />
                Docked
            </label>
        </div>
        <div>
            <label>
                <input
                    type="radio"
                    bind:group={$auto_charge_station}
                    value=3
                />
                Engaged
            </label>
        </div>
    </div>
</div>

<div class="centerButtonsValue">
    <h1 class="text-center">
        {autoChargeStationMessages[$auto_charge_station]}
    </h1>
</div>

<style>
    .centerButtons {
        display: flex;
        justify-content: center;
    }

    .centerButtonsValue {
        margin: 2vw;
        font-size: large;
    }
</style>
