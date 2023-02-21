<script lang="ts">
    import { notes } from "$lib/stores/matchScoutStores";
    let notesText : string;
    function handleText(){
        notes.set(notesText);
    }

</script>
<div class = "makeBorder">
    Notes
    <textarea bind:value = {notesText} type="text" class = "notesBox" on:input={handleText}> </textarea>
</div>
<style>
    .notesBox{
        width: 100%;
        resize: none;
        height: 63px;
    }

    .makeBorder{
        display: flex;
        font-family: "Poppins";
        flex-direction: column;
        background-color: #efdcdc;
        border-color: black;
        font-size: 23px;
        border-width: 2px;
        border-radius: 0.5rem;
        justify-content: center;
        padding: 11px;
    }
</style>