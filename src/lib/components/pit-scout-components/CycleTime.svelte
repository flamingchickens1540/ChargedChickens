<script lang="ts">
    import { est_cycle_time } from '$lib/stores/pitScoutStores'
</script>
<div class = "iMustBeFancy">
<div class="makeBorder">
    <h1 class="text-xl text-center">Estimated CycleTime(In Seconds)</h1>
    <input type="number" class="notesBox" bind:value={$est_cycle_time} />
</div>
</div>

<style>
    .notesBox {
        width: 100%;
        resize: none;
        height: 31px;
        text-align: center;
    }
    .makeBorder {
        display: flex;
        font-family: 'Poppins';
        flex-direction: column;
        align-items: center;
        width: 341px;
        background-color: #efdcdc;
        /*border-color: black*/
        font-size: 23px;
        /*border-width: 2px;*/
        border-radius: 0.5rem;
        justify-content: center;
        padding: 11px;
    }

    @keyframes theFancy {
        to {
            background-position: 89.81vw;
        }
    }
    .iMustBeFancy {
        background-image: linear-gradient(
            90deg,
            #fce644 0%,
            #ee5a49 49%,
            #fce644 100%
        );
        animation: theFancy 4s linear infinite;
        padding: 4px;
        border-radius: 0.5rem;
    }
</style>
