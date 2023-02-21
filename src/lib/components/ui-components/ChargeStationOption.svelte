<script lang="ts"> 
    export let clickHandler : (id : number) => void;
    export let name : string;
    export let id : number;
    export let edgeOption : boolean = false;
    export let selectedOption : number;
</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">

<button class:selected={selectedOption == id} class:edgeOption on:mousedown={() => clickHandler(id)}>{name}</button>

<style>
    button {
        font-family: "Poppins";
        font-size: 6vw;
        text-align: left;
        border-width: 2px;
        border-top-width: 1px;
        border-color: black;
        padding-left: 2vw;
    }

    .edgeOption {
        border-bottom-left-radius: 0.5em;
        border-bottom-right-radius: 0.5em;
    }
    
    .selected {
        background-color: #7ED957;
        font-weight: bold;
    }
</style>