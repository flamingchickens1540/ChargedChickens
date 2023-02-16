<script lang="ts">
  import ScoutCarousel from "$lib/components/ScoutCarousel.svelte";
  import type { MatchScoutInfo } from "$lib/types";
  import { info } from "$lib/stores/generalStores";

  let controller: AbortController;
  let promise: Promise<void> = err();
<body>
  <!-- <h1 class="text-red-600 text-4xl text-center font-bold">Match Scout</h1>   -->
  <div id="carousel" class="h-screen w-full">
    <div id="auto">
      <AutoScore />
      <br>
      <AutoChargeStation />
      <br>
      <AutoCommunity />
    </div>
    <div id="tele">
      <TeleScore />
    </div>
    <div id="end" class = "endBackground">
      <EndChargeStation />
      <br>
      <EndDriverSkill />
      <br>
      <div class = "makeBorder">
        <EndBroke />
        <EndDied />
      </div>
      <br>
      <EndNotes />
    </div>
    <div id=submit>
      <Submit />
    </div>
  </div>

  async function err() {
    throw new Error();
  }

  async function reqScoutInfo() {
    controller = new AbortController();
    promise = new Promise(async (resolve, reject) => {
      controller.signal.addEventListener("abort", reject);
      $info = await recursivePoll();
      resolve();
    });
  }


  async function recursivePoll(): Promise<MatchScoutInfo> {
    return await fetch("/api/scout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then(async (data: MatchScoutInfo) => {
        if (data.success) {
          return data;
        } else {
          return await recursivePoll();
        }
      })
      .catch(err => {
        return {"success": false};
      });
  }
</script>

<svelte:head>
  <title>Match Scout</title>
</svelte:head>

<div class="text-center">
  {#await promise}
    <button
      class="text-blue-500 font-bold text-4xl p-8 rounded bg-red-500"
      on:click={() => controller.abort()}>Log Out</button
    >
  {:then}
    <ScoutCarousel />
  {:catch}
    <button
      class="text-blue-500 font-bold text-4xl p-8 rounded bg-green-500"
      on:click={() => reqScoutInfo()}>Log In</button
    >
  {/await}
</div>

<style>
  .makeBorder{
        display: flex;
        flex-direction: column;
        background-color: #efdcdc;
        border-color: black;
        border-width: 2px;
        border-radius: 0.5rem;
    }
  body {
    background-color: rgb(85, 163, 218);
  }

    .endBackground{
      background-image: linear-gradient(to top right,#DBD6D6, #DBD6D6);
      padding-left: 17px;
      padding-right: 17px;
    }
</style>
