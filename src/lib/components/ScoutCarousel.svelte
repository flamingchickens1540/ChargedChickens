<script lang="ts">
    import AutoChargeStation from '$lib/components/match-scout-components/AutoChargeStation.svelte'
    import AutoCommunity from '$lib/components/match-scout-components/AutoCommunity.svelte'
    import EndBroke from '$lib/components/match-scout-components/EndBroke.svelte'
    import EndChargeStation from '$lib/components/match-scout-components/EndChargeStation.svelte'
    import EndDied from '$lib/components/match-scout-components/EndDied.svelte'
    import EndDriverSkill from '$lib/components/match-scout-components/EndDriverSkill.svelte'
    import EndNotes from '$lib/components/match-scout-components/EndNotes.svelte'
    import AutoScore from '$lib/components/match-scout-components/AutoScore.svelte'
    import TeleScore from '$lib/components/match-scout-components/TeleScore.svelte'
    import Submit from '$lib/components/match-scout-components/Submit.svelte'
    import Siema from 'siema'
    import { onMount } from 'svelte'

    onMount(() => {
        new Siema({
            selector: '#carousel',
            duration: 200,
            easing: 'ease-in-out',
            perPage: 1,
            startIndex: 0,
            draggable: true,
            multipleDrag: false,
            threshold: 20,
            loop: false,
            rtl: false,
            onInit: () => {},
            onChange: () => {},
        })
    })
</script>

<!-- <h1 class="text-red-600 text-4xl text-center font-bold">Match Scout</h1>   -->

<!-- fix margin -->
<div id="carousel" style="height:fit-content;">
    <div id="auto" class="flex flex-col" style="padding:3vw;flex-wrap:wrap">
        <AutoScore/>
            <div style="padding-top:1vh;">
                <AutoChargeStation />
            </div>
            <div class="makeWideWider" style="padding-top:1vh">
                <AutoCommunity />
            </div>
    </div>
    <div id="tele" style="padding-left:3vh;padding-right:3vh;">
        <TeleScore />
    </div>
    <div id="end" style="padding-left:3vh;padding-right:3vh;">
        <EndChargeStation />
        <EndDriverSkill />
        <EndBroke />
        <EndDied />
        <EndNotes />
    </div>
    <div id="submit" style="padding:10px;">
        <Submit />
    </div>
</div>
