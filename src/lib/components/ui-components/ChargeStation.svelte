<script lang="ts">
    import ChargeStationOption from '../ui-components/ChargeStationOption.svelte'

    /**
     * All potential charge station states
     */
    export let options = ['Not Attempted', 'Failed', 'Docked', 'Engaged'];

    /**
     * Handles a click with the option selected
     * @param option the index of the option that was selected
     */
    export let handleClick: (option: number) => void
    export let name: string = 'Charge Station'

    let selectedOption: number = 0

    /**
     * Passes the selected option off the handleClick function
     * @param id - Which option was selected
     * @see EndChargeStation.svelte
     * @see AutoChargeStation.svelte
     */
    function onClick(id: number) {
        handleClick((selectedOption = id))
    }
</script>

<div class="makeColumnButtons">
    <div class="buttonsTitle">
        {name}
    </div>
    {#each options as name, index}
        <ChargeStationOption
            selected={selectedOption == index}
            {name}
            id={index}
            click={onClick}
        />
    {/each}
</div>

<style>
    .makeColumnButtons {
        display: flex;
        flex-direction: column;
        border-color: black;
        background-color: #efdcdc;
        border-width: 2px;
        border-radius: 10px;
        pointer-events: none;
    }

    .buttonsTitle {
        text-align: center;
        font-weight: 700;
        font-family: 'Poppins';
        font-size: 23px;
        height: 51px;
        border-color: black;
        padding-top: 6px;
    }
</style>
