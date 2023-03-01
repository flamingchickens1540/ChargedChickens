<script lang="ts">
  import { length, width } from "$lib/stores/pitScoutStores";
</script>

<div class="makeBorder">
  <div class = "makeFont"> Dimensions </div>
  <label for="length">Length(cm)</label>
  <input name="length" class = "notesBox" type="number" bind:value={$length}>
  <div class = "makeLine"> </div>
  <label for="width">Width(cm)</label>
  <input name="width" class = "notesBox" type="number" bind:value={$width}>
</div>

<style>

  .makeFont{
    font-size: 23px;
    border-bottom-width: 2px;
    border-color: black;
    width: 341px;
    display: flex;
    justify-content: center;
    font-weight: 700;
  }

  .makeLine{
    border-bottom-width: 2px;
    border-color: black;
    width: 341px;
    height: 11px;
  }

  .notesBox{
    width: 243px;
    resize: none;
    height: 31px;
    text-align: center;
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