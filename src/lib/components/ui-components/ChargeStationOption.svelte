<script lang="ts"> 
    export let name : string;
    export let selected: boolean;
    export let click : any;
    export let id : number;
</script>

<button class:selected on:mousedown={() => click(id)}>{name}</button>

<style>
    button {
        font-family: "Poppins";
        font-size: 6vw;
        text-align: left;
        border-top-width: 2px;
        border-top-color: black;
        background-color: #efdcdc;
        padding-left: 2vw;
        z-index: 0;
        pointer-events:all;
    }
    
    .selected {
        background-color: #7ED957;
        font-weight: bold;
    }
</style>