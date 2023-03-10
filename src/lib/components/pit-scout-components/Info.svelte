<script lang="ts">
  import { event_key, team_key } from "$lib/stores/pitScoutStores";
	event_key.set(localStorage.getItem('event_key') || null)
</script>

<div class="makeBorder">
  Event Key: <input class="notesBox" bind:value={$event_key} />
  Team Key: <input class="notesBox" bind:value={$team_key} />
</div> 

<style>

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
    padding: 13px;
    padding-bottom: 14px;
  }
  </style>
