<script lang="ts">
    import { auto_high_center_fail, auto_high_center_succeed, auto_high_left_fail, auto_high_left_succeed, auto_high_right_fail, auto_high_right_succeed, auto_low_center_fail, auto_low_center_succeed, auto_low_left_fail, auto_low_left_succeed, auto_low_right_fail, auto_low_right_succeed, auto_mid_center_fail, auto_mid_center_succeed, auto_mid_left_fail, auto_mid_left_succeed, auto_mid_right_fail, auto_mid_right_succeed, auto_score } from "$lib/stores/matchScoutStores";
    import ScoreTable from "$lib/components/ui-components/ScoreTable.svelte";

    export const autoScoreSucceed = [
        auto_high_left_succeed, 
        auto_high_center_succeed, 
        auto_high_right_succeed, 
        auto_mid_left_succeed, 
        auto_mid_center_succeed, 
        auto_mid_right_succeed, 
        auto_low_left_succeed, 
        auto_low_center_succeed, 
        auto_low_right_succeed
    ];
    export const autoScoreFail = [
        auto_high_left_fail, 
        auto_high_center_fail, 
        auto_high_right_fail, 
        auto_mid_left_fail, 
        auto_mid_center_fail, 
        auto_mid_right_fail, 
        auto_low_left_fail, 
        auto_low_center_fail, 
        auto_low_right_fail
    ];
</script>

<!-- <svelte:window bind:outerHeight bind:outerWidth/> -->
<h1 id="header" class="text-red-600 text-center text-5xl font-extrabold">AutoScore</h1>
<ScoreTable scoreSucceed={autoScoreSucceed} scoreFail={autoScoreFail}/>