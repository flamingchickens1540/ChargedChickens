<script lang="ts">
  import ScoutCarousel from "$lib/components/ScoutCarousel.svelte";
  import type { MatchScoutInfo } from "$lib/types";
  import { info } from "$lib/stores/generalStores";
  import { APPKEY } from "$lib/stores/generalStores";

  let controller: AbortController;
  let promise: Promise<void> = err();
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

  /**
   * Recursively makes a POST request for a new team to scout
   * 
   * @returns A promise for MatchScoutInfo
   */
  async function recursivePoll(): Promise<MatchScoutInfo> {
    return await fetch("/api/scout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "passphrase": localStorage.getItem("passphrase") || "",
        "APPKEY": $APPKEY,
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
    <h1 class="text-5xl"><strong>Waiting for Match Assignment</strong></h1>
  {:then}
    <!-- <h1><strong>You've Been Assigned To Team {$info.robot?.team_key}</strong></h1> -->
    <ScoutCarousel />
  {:catch}
    <button
      class="text-blue-500 font-bold text-4xl p-8 rounded bg-green-500"
      on:click={() => reqScoutInfo()}>Log In</button
    >
  {/await}
</div>
