<script lang="ts">
    import ChargeStationOption from "../ui-components/ChargeStationOption.svelte";

    const options = [
        "Not Attempted",
        "Failed",
        "Docked",
        "Engaged"
    ]
    export let handleClick : (option : number) => void;
    export let name : string;

    let selectedOption: number = 0;

    function onClick(id : number) {
        console.log("f")
        handleClick(selectedOption = id);
    }
</script>

<div class="makeColumnButtons">
    <div class="buttonsTitle"> 
        {name}
    </div>
    {#each options as name, index}
        <ChargeStationOption selected={selectedOption == index} name={name} id={index} click={onClick}></ChargeStationOption>
    {/each}
</div>

<style>
    .makeColumnButtons{
        display: flex;
        flex-direction: column;
        border-radius: 0.5vw;
        border-color: black;
        background-color: #efdcdc;
        border-width: 4px;
        border-radius: 0.5rem;
        pointer-events: none;
    }
    
    .buttonsTitle{
        text-align: center;
        font-weight: 700;
        font-family: "Poppins";
        font-size: 23px;
        height: 51px;
        border-color: black;
        padding-top: 6px;
    }
</style>