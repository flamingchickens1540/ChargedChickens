<!-- Credit: David -->
<script lang="ts">
    import { notes } from '$lib/stores/matchScoutStores'
</script>

<div>
    <div class="makeBorder">
        Extra Notes
        <textarea bind:value={$notes} class="notesBox" placeholder="The greatest arm of all time" />
    </div>
</div>

<style>
    .notesBox {
        width: 100%;
        resize: none;
        height: 70px;
    }
    .makeBorder {
        font-family: 'Poppins';
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
