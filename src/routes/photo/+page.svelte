<script lang="ts">
    import { APPKEY } from '$lib/stores/generalStores'
    import type { EventKey, TeamKey } from '$lib/types'
    import FancyButtons from '$lib/components/ui-components/FancyButtons.svelte'
    import { confetti } from '@neoconfetti/svelte'
    import { tick } from 'svelte'
    import { event_key } from '$lib/stores/pitScoutStores'
    let isVisible = false
    let submitVisible = false
    let hasSumbit = false

    let photos: FileList
    let team_key: TeamKey
    //  let event_key: EventKey
    event_key.set((localStorage.getItem('event_key') as EventKey) || null)
    function removeFile(photo: File) {
        const file = Array.from(photos).indexOf(photo)
        photos = Array.from(photos).filter(
            (_, i) => i !== file
        ) as unknown as FileList
    }

    function submit() {
        isVisible = true
        hasSumbit = true

        const data = new FormData()
        Array.from(photos).forEach((file) => {
            data.append('photo', file)
            removeFile(file)
        })

        data.append('team_key', ("frc" + team_key).trim())
        localStorage.setItem('event_key', $event_key)
        data.append(
            'match_key',
            localStorage.getItem('event_key') || ''
        )

        fetch('/api/submit/photo', {
            method: 'POST',
            headers: {
                passphrase: localStorage.getItem('passphrase') || '',
                APPKEY: $APPKEY,
            },
            body: data,
        })
            .then((data) => data.json())
            .then((data) => {
                if (data.success) location.reload()
            })
            .then((res) => console.log(res))
    }
</script>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
<link
    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
    rel="stylesheet"
/>

<svelte:head>
    <title>Photo Upload</title>
</svelte:head>
<div class="endBackground">
    <h1 class="makeTitle">Upload a photo</h1>
    <div class="makeBorder">
        <!--- TODO: regex match this input and prevent submission with invalid team_key --->

        Event Key:
        <input
            class="notesBox"
            placeholder={'2023demo'}
            bind:value={$event_key}
        />

        Team Key:
        <input class="notesBox" placeholder={'1540'} bind:value={team_key} />
        <!--- TODO: make the number of files update correct --->
    </div>
    <br />
    <div class="makeUpload">
        <input type="file" multiple accept="image/*" bind:files={photos} />
        <div class="photoRight">
            {#if photos}
                {#each photos as photo}
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <h2>Selected</h2>
                    <button on:click={() => removeFile(photo)}>
                        <img
                            src={URL.createObjectURL(photo)}
                            alt={photo.name}
                        />
                    </button>
                {/each}
            {/if}
        </div>
    </div>
    <br />
</div>

<div class="flex flex-col items-center">
    <FancyButtons
        text={'Upload'}
        on:click={submit}
        bgColor={'#39c41f'}
        fontSize={'47px'}
    />
    {#if submitVisible}
        <div>
            <div use:confetti />
        </div>
    {/if}
    {#if isVisible}
        <div>
            <div use:confetti />
        </div>
    {/if}
    <div class="downButtons">
        {#if hasSumbit}
            <FancyButtons
                on:click={async () => {
                    isVisible = false
                    await tick()
                    isVisible = true
                }}
                text="Go Ahead And Click This For More Confetti :D Your Welcome -David :D"
                bgColor="#39c41f"
                fontSize="11px"
            />
        {/if}
    </div>
</div>

<style>
    .photoRight {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-right: 37px;
    }

    .makeTitle {
        font-family: 'Poppins';
        font-size: 2.6rem;
        color: #b231f5;
    }
    .makeUpload {
        display: flex;
        font-family: 'Poppins';
        width: 341px;
        background-color: #efdcdc;
        border-color: black;
        font-size: 1.2rem;
        text-align: center;
        border-width: 2px;
        border-radius: 0.5rem;
        justify-content: center;
        padding-left: 37px;
        padding-top: 11px;
        padding-bottom: 11px;
        flex-direction: column;
        align-content: center;
    }
    .notesBox {
        width: 243px;
        resize: none;
        height: 31px;
        text-align: center;
    }
    .makeBorder {
        display: flex;
        font-family: 'Poppins';
        flex-direction: column;
        align-items: center;
        width: 341px;
        /* background-color: #efdcdc; */
        border-color: black;
        font-size: 23px;
        border-width: 2px;
        border-radius: 0.5rem;
        justify-content: center;
        padding: 13px;
        padding-bottom: 14px;
    }

    .endBackground {
        padding-left: 17px;
        padding-right: 17px;
        padding: 17px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
