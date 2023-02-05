<script lang="ts">
    import { end_charge_station } from "$lib/matchScoutStores";
</script>

<h1 class="text-red-600 text-center">EndChargeStation</h1>
<div class="centerButtons">
    <div class="content-center">
        <div>
            <label>
                <input
                    type="radio"
                    bind:group={$end_charge_station}
                    value={"Current Selected: Not Attempted"}
                />
                Not Attempted
            </label>
        </div>
        <div>
            <label>
                <input
                    type="radio"
                    bind:group={$end_charge_station}
                    value={"Current Selected: Failed"}
                />
                Failed
            </label>
        </div>
        <div>
            <label>
                <input
                    type="radio"
                    bind:group={$end_charge_station}
                    value={"Current Selected: Docked"}
                />
                Docked
            </label>
        </div>
        <div>
            <label>
                <input
                    type="radio"
                    bind:group={$end_charge_station}
                    value={"Current Selected: Engaged"}
                />
                Engaged
            </label>
        </div>
    </div>
</div>

<div class="centerButtonsValue">
    <h1>
        {$end_charge_station}
    </h1>
</div>

<style>
    .centerButtons {
        display: flex;
        justify-content: center;
    }

    .centerButtonsValue {
        display: flex;
        justify-content: center;
    }
</style>
