<script lang="ts">
    import ScoutCarousel from '$lib/components/ScoutCarousel.svelte'
    import type { MatchScoutInfo } from '$lib/types'
    import { info } from '$lib/stores/generalStores'
    import { APPKEY } from '$lib/stores/generalStores'
    import { beforeNavigate } from '$app/navigation'
    let funnyrandom = "https://cultofthepartyparrot.com/parrots/parrot.gif"
    let controller: AbortController
    let promise: Promise<void> = err()
    let parrots: string[] = ["bobrossparrot.gif", "portalparrot.gif", "pythonparrot.gif", "revertitparrot.gif", "rotatingparrot.gif", "ryangoslingparrot.gif", "schnitzelparrot.gif", "shipitparrot.gif", "shufflefurtherparrot.gif", "shufflepartyparrot.gif", "skiparrot.gif", "slomoparrot.gif", "sovjetparrot.gif", "stalkerparrot.gif", "standupparrot.gif", "tacoparrot.gif", "tripletsparrot.gif", "uparrowparrot.gif", "upvoteparrot.gif", "wave1parrot.gif", "wave2parrot.gif", "wave3parrot.gif", "wave4parrot.gif", "wave5parrot.gif", "wave6parrot.gif", "wave7parrot.gif", "wave8parrot.gif", "wave9parrot.gif", "chillparrot.gif", "coffeeparrot.gif", "cryptoparrot.gif", "dabparrot.gif", "darkbeerparrot.gif", "databaseparrot.gif", "deployparrot.gif", "dizzyparrot.gif", "docparrot.gif", "dreidelparrot.gif", "drupal_parrot.gif", "ethparrot.gif", "explodyparrot.gif", "fadingparrot.gif", "fidgetparrot.gif", "fiestaparrot.gif", "fixparrot.gif", "halalparrot.gif", "hamburgerparrot.gif", "harrypotterparrot.gif", "icecreamparrot.gif", "krakenparrot.gif", "loveparrot.gif", "luckyparrot.gif", "margaritaparrot.gif", "matrixparrot.gif", "mergedparrot.gif", "metalparrot.gif", "mongodbparrot.gif", "oldtimeyparrot.gif", "papalparrot.gif", "parrot.gif", "pear-parrots.gif", "pizzaparrot.gif", "asyncparrot.gif", "bananaparrot.gif", "blondesassyparrot.gif", "bluescluesparrot.gif",];

    beforeNavigate(() => (controller != null ? controller.abort() : null))

    function funnyfunction(){
    funnyrandom = "https://cultofthepartyparrot.com/parrots/"+parrots[Math.floor(Math.random() * parrots.length)];}
    async function err() {
        throw new Error()
    }

    async function reqScoutInfo() {
        controller = new AbortController()
        promise = new Promise(async (resolve, reject) => {
            controller.signal.addEventListener('abort', reject)
            $info = await recursivePoll()
            if ($info.success) {
                resolve()
            } else reject()
        })
    }

    /**
     * Recursively makes a POST request for a new team to scout
     *
     * @returns A promise for MatchScoutInfo
     */
    async function recursivePoll(): Promise<MatchScoutInfo> {
        return await fetch('/api/scout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                passphrase: localStorage.getItem('passphrase') || '',
                APPKEY: $APPKEY,
            },
            signal: controller.signal,
        })
            .then((res) => res.json())
            .then(async (data: MatchScoutInfo) => {
                if (data.success) {
                    return data
                } else {
                    await new Promise((resolve) =>
                        setTimeout(resolve, data.nextPollTime - Date.now())
                    )
                    return await recursivePoll()
                }
            })
            .catch((err) => {
                return { success: false, nextPollTime: 0 }
            })
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
        <h1 class="text-5xl"><strong>Waiting for Match Assignment</strong></h1><br>
        <button class="text-blue-500 font-bold text-4xl p-8 rounded bg-green-500" style="font-size: 20px;" on:click = {funnyfunction}><strong>Why not generate a random partyparrot while you wait?! Click here to generate!</strong></button><br><br><br><br>
        <img class="center" style="width: 400px;" src="{funnyrandom}" alt="">
    {:then}
        <ScoutCarousel />
    {:catch}
        <div class="grid grid-rows-1 grid-cols-1 place-items-center">
            <img src="favicon.png" alt="" />
        </div>
        <br />
        <button
            class="text-blue-500 font-bold text-4xl p-8 rounded bg-green-500"
            on:click={() => reqScoutInfo()}>Log In</button>
        
    {/await}
</div>
<style>
    .center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>