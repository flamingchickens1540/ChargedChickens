<!-- Credit: David -->

<script lang="ts">
    import { notes } from "$lib/stores/matchScoutStores";
  </script>
  
  <div class="grid grid-rows-1 grid-cols-1 place-items-center">
    <div class = "makeBorder">
      Extra Notes
          <textarea bind:value={$notes} class = "notesBox"></textarea>
    </div>
  </div>

  <style>
    .notesBox{
        width: 100%;
        resize: none;
        height: 63px;
    }
    .makeBorder{
        font-family: "Poppins";
        flex-direction: column;
        background-color: #efdcdc;
        border-color: black;
        font-size: 23px;
        border-width: 0.75vw;
        border-radius: 0.5rem;
        justify-content: center;
        padding: 11px;
    }
</style>