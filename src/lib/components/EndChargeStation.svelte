<script lang="ts">
    import { end_charge_station } from "$lib/matchScoutStores";
    let changeStationStatus = "Current Selected: Not Attempted";
</script>

<h1 class="text-red-600 text-center">How Well Did They Dock The Charge Station?</h1>
<div class="centerButtons">
    <div class="content-center">
        <div>
            <label>
                <input
                    type="radio"
                       
                    bind:group={changeStationStatus}
                    
                    value={"Current Selected: Not Attempted"}
                />
                Not Attempted
            </label>
        </div>
        <div>
            <label>
                <input
                    type="radio"

                       bind:group={changeStationStatus}

                       value={"Current Selected: Failed"}
                />
                Failed
            </label>
        </div>
        <div>
            <label>
                <input
                    type="radio"

                       bind:group={changeStationStatus}

                       value={"Current Selected: Docked"}
                />
                Docked
            </label>
        </div>
        <div>
            <label>
                <input
                    type="radio"
                       
                        bind:group={changeStationStatus}

                       value = {"Current Selected: Engaged"}
                />
                Engaged
            </label>
        </div>
    </div>
</div>

<div class="centerButtons">
    <h1>
        {$end_charge_station}
    </h1>
</div>

<style>
    .centerButtons {
        display: flex;
        justify-content: center;
    }

</style>

<div class = "centerButtonsValue">
    <h1>
        {changeStationStatus}
    </h1>
</div>