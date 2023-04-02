<script lang="ts">
    import { get } from 'svelte/store'
    import {
        cycle_times,
        defense_times,
        team_matches_stores,
    } from '$lib/stores/matchScoutStores'
    import { confetti } from '@neoconfetti/svelte'
    import { tick } from 'svelte'
    import FancyButtons from '$lib/components/ui-components/FancyButtons.svelte'
    import { APPKEY, DEBUG, info } from '$lib/stores/generalStores'
    import type { TeamMatch } from '$lib/types'
    let isVisible = false
    let submitVisible = false
    let hasSumbit = false

    /**
     * Iterates through all matchScoutStores and puts them into a JSON Object
     * Then it makes a POST request to the backend, which stores the match data
     *
     * @complete
     */
    async function submit() {
        let data: TeamMatch = {
            broke: false,
            died: false,
            notes: '',
            skill: 0,
            auto_charge_station: 0,
            end_charge_station: 0,
            auto_high_left_succeed: 0,
            auto_high_center_succeed: 0,
            auto_high_right_succeed: 0,
            auto_mid_left_succeed: 0,
            auto_mid_center_succeed: 0,
            auto_mid_right_succeed: 0,
            auto_low_left_succeed: 0,
            auto_low_center_succeed: 0,
            auto_low_right_succeed: 0,
            auto_high_left_fail: 0,
            auto_high_center_fail: 0,
            auto_high_right_fail: 0,
            auto_mid_left_fail: 0,
            auto_mid_center_fail: 0,
            auto_mid_right_fail: 0,
            auto_low_left_fail: 0,
            auto_low_center_fail: 0,
            auto_low_right_fail: 0,
            tele_high_left_succeed: 0,
            tele_high_center_succeed: 0,
            tele_high_right_succeed: 0,
            tele_mid_left_succeed: 0,
            tele_mid_center_succeed: 0,
            tele_mid_right_succeed: 0,
            tele_low_left_succeed: 0,
            tele_low_center_succeed: 0,
            tele_low_right_succeed: 0,
            tele_high_left_fail: 0,
            tele_high_center_fail: 0,
            tele_high_right_fail: 0,
            tele_mid_left_fail: 0,
            tele_mid_center_fail: 0,
            tele_mid_right_fail: 0,
            tele_low_left_fail: 0,
            tele_low_center_fail: 0,
            tele_low_right_fail: 0,
        }
        isVisible = true
        hasSumbit = true

        Object.keys(team_matches_stores).map((key) => {
            // @ts-ignore
            data[key] = get(team_matches_stores[key])
        })

        console.log("defense: " + $defense_times)

        fetch('/api/submit/match', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                passphrase: localStorage.getItem('passphrase') || '',
                APPKEY: $APPKEY,
            },
            body: JSON.stringify({
                match: $info?.match,
                robot: $info?.robot,
                data,
                cycle_times: $cycle_times,
                defense_times: $defense_times,
            }),
        }).then(() => location.reload())
    }
</script>

<div class="flex flex-col items-center">
    <FancyButtons
        text={'Submit'}
        on:click={submit}
        bgColor={'#39c41f'}
        fontSize={'47px'}
    />
    {#if submitVisible}
        <div>
            <div use:confetti />
        </div>
    {/if}
</div>
