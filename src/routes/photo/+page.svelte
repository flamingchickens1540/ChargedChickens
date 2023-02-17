<script lang="ts">
  import { APPKEY } from "$lib/generalStores";
  import type { TeamKey } from "$lib/types";

  let photos: FileList;
  let team_key: TeamKey;

  function removeFile(photo: File) {
    const file = Array.from(photos).indexOf(photo);
    //                                                       typescript being weird
    photos = Array.from(photos).filter((_, i) => i !== file) as unknown as FileList;
  }

  function submit() {
    const data = new FormData();
    Array.from(photos).forEach((file) => {
      data.append("photo", file);
      removeFile(file);
    });
    data.append("team_key", team_key);
    fetch("/api/submit/photo", {
      method: "POST",
      headers: {
        "passphrase": localStorage.getItem("passphrase") || "",
        "APPKEY": $APPKEY,
      },
      body: data,
    });
  }
</script>

<svelte:head>
  <title>Photo Upload</title>
</svelte:head>

<div class="text-center grid grid-cols-1 grid-rows-3 place-items-center gap-1">
  <h1 class="text-red-600 text-4xl text-center font-bold">Upload a photo</h1>
  <!--- TODO: regex match this input and prevent submission with invalid team_key --->
  <input class="bg-yellow-300" bind:value={team_key} />
  <!--- TODO: make the number of files update correct --->
  <input type="file" multiple accept="image/*" bind:files={photos} />
</div>

{#if photos}
  <h2 class="text-2xl text-center font-bold">Preview</h2>
  {#each photos as photo}
    <div class="flex flex-col items-center">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <img
        src={URL.createObjectURL(photo)}
        alt={photo.name}
        on:click={() => removeFile(photo)}
        class="w-1/2"
      />
      <p>{photo.name}</p>
    </div>
  {/each}
{/if}
<br />
<div class="grid grid-col-1 grid-rows-1 place-items-center">
  <!--- TODO: disable this when there are no files??? --->
  <button
    class="text-red-600 text-lg p-2 rounded bg-yellow-300"
    on:click={submit}>Upload</button
  >
</div>
