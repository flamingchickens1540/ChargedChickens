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
  <button class="text-red-600 text-lg p-2 rounded bg-yellow-300" on:click={() => goto("match-scout")}>Match Scout</button>
  <button class="text-red-600 text-lg p-2 rounded bg-yellow-300" on:click={() => goto("pit-scout")}>Pit Scout</button>
  <button class="text-red-600 text-lg p-2 rounded bg-yellow-300" on:click={() => goto("photo")}>Photo</button>
  <br>
  <input type="text" bind:value={inputPhrase}>
  <button class="text-red-600 text-lg p-2 rounded bg-yellow-300" on:click={() => setPassphrase()}>AUTH</button>
</body>

<style>
    @supports (-webkit-text-stroke: 1px black) {
      body {
        background-color: rgb(85, 163, 218);
      }
  
      h1 {
        color: rgb(242, 185, 69 );
        -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: black;
      }
    }
  </style>
  