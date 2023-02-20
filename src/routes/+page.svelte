<script lang="ts">
  import { goto } from '$app/navigation';

  let inputPhrase = "";

  function setPassphrase() {
    localStorage.setItem("passphrase", inputPhrase);
    inputPhrase = "";
  }
</script>

<svelte:head>
	<title>Charged Chickens!</title>
</svelte:head>

<body>
  <div class="grid grid-cols-1 grid-rows-3 place-items-center gap-2">
    <button class="text-red-600 text-lg p-2 rounded bg-yellow-300" on:click={() => goto("match-scout")}>Match Scout</button>
    <button class="text-red-600 text-lg p-2 rounded bg-yellow-300" on:click={() => goto("pit-scout")}>Pit Scout</button>
    <button class="text-red-600 text-lg p-2 rounded bg-yellow-300" on:click={() => goto("photo")}>Photo</button>
  </div>
  <br>
  <div class="grid grid-cols-1 grid-row-1 place-items-center gap-2">
    <input type="text" bind:value={inputPhrase}>
    <button class="text-red-600 text-lg p-2 rounded bg-yellow-300" on:click={() => setPassphrase()}>AUTH</button>
  </div>  
</body>

<style>
  
  /* h1 {
    color: rgb(242, 185, 69 );
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: black;
  } */
    
  </style>
  