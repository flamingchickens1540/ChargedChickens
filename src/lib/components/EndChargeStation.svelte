<script lang="ts">
    import { end_charge_station } from "$lib/matchScoutStores";
</script>

<h1 class="text-orange-400 text-center">Charge Station Docking - Endgame</h1>
<div class="centerButtons">
    <div class="content-center">
        <div>
            <label>
                <input
                    type="radio"
                    bind:group={$end_charge_station}
                    value=0
                />
                Not Attempted
            </label>
        </div>
        <div>
            <label>
                <input
                    type="radio"
                    bind:group={$end_charge_station}
                    value=1
                />
                Failed
            </label>
        </div>
        <div>
            <label>
                <input
                    type="radio"
                    bind:group={$end_charge_station}
                    value=2
                />
                Docked
            </label>
        </div>
        <div>
            <label>
                <input
                    type="radio"
                    bind:group={$end_charge_station}
                    value=3
                />
                Engaged
            </label>
        </div>
    </div>
</div>

<div class="centerButtonsValue">
    <h1 class="text-center">
        {#if $end_charge_station == 0}
            Not Attempted
        {:else if $end_charge_station == 1}
            Failed
        {:else if $end_charge_station == 2}
            Docked
        {:else if $end_charge_station == 3}
            Engaged
        {/if}
    </h1>
</div>

<style>
    .centerButtons {
        display: flex;
        justify-content: center;
    }
</style>
