<script lang="ts">
  import { notes } from "$lib/stores/pitScoutStores";
</script>

<div class = "makeBorder">
  Extra Notes
      <textarea bind:value={$notes} class = "notesBox"></textarea>
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
      align-items: center;
      width: 341px;
      background-color: #efdcdc;
      border-color: black;
      font-size: 23px;
      border-width: 2px;
      border-radius: 0.5rem;
      justify-content: center;
      padding: 11px;
  }
</style>