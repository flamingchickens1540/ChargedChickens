<script lang="ts">
    import { auto_high_center_fail, auto_high_center_succeed, auto_high_left_fail, auto_high_left_succeed, auto_high_right_fail, auto_high_right_succeed, auto_low_center_fail, auto_low_center_succeed, auto_low_left_fail, auto_low_left_succeed, auto_low_right_fail, auto_low_right_succeed, auto_mid_center_fail, auto_mid_center_succeed, auto_mid_left_fail, auto_mid_left_succeed, auto_mid_right_fail, auto_mid_right_succeed, auto_score } from "$lib/stores/matchScoutStores";
    import TeleOpScoring from "$lib/assets/Teleop.png";
    import { Canvas, Layer } from "svelte-canvas";
    import { onMount } from 'svelte';

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

    // @ts-ignore
    $: render = ({ context }) => {

        const AutoScoreBoard = new Image();

        AutoScoreBoard.src = TeleOpScoring;
        AutoScoreBoard.onload = () => {
            context.drawImage(AutoScoreBoard, 0, 0, outerWidth, outerWidth);
        };
    };

    /**
     * Handles the double clicking of the mouse on the telescore canvas
     * The purpose is to increment one of the teleScoreFail stores based on which cell on the canvas grid was clicked
     * 
     * @remarks
     * For some reason, the rows calculation starts at 1, when it should start at 0, so we decrement the value by 1
     * This is most likely because the elementHeight var actual measures from the top of the screen, not the top of the canvas
     * This means that the 0th row is treated like the 1st row, even though clicks made on the 1st row are disregarded.
     * 
     * @param mouse - type: MouseEvent
     * 
     */
    function mouseClicked(mouse : MouseEvent) {
        if(mouse.offsetY == outerWidth || mouse.offsetX == outerWidth)
            return;

        const row = Math.floor(mouse.offsetY / outerWidth * 3);
        const col = Math.floor(mouse.offsetX / outerWidth * 3);

        // if (DEBUG) {
        //   console.log("Row: ");
        //   console.log(row);
        //   console.log("Column:");
        //   console.log(col);
        // }
        
        autoScoreSucceed[col + row * 3].update(n => n++);
    }

    /**
     * Handles the double clicking of the mouse on the telescore canvas
     * The purpose is to increment one of the teleScoreFail stores based on which cell on the canvas grid was clicked
     * 
     * @remarks
     * For some reason, the rows calculation starts at 1, when it should start at 0, so we decrement the value by 1
     * This is most likely because the elementHeight var actual measures from the top of the screen, not the top of the canvas
     * This means that the 0th row is treated like the 1st row, even though clicks made on the 1st row are disregarded.
     * 
     * @param mouse - type: MouseEvent
     * 
     */

    function mouseDoubleClicked(mouse: MouseEvent) {
        if(mouse.offsetY == outerWidth || mouse.offsetX == outerWidth)
            return;

        const row = Math.floor(mouse.offsetY / outerWidth * 3);
        const col = Math.floor(mouse.offsetX / outerWidth * 3); 

        // if (DEBUG) {
        //   console.log("Row: ");
        //   console.log(row);
        //   console.log("Column:");
        //   console.log(col);
        // }
        
        autoScoreFail[col + row * 3].update(n => n++);
    }

    onMount(() => {
        outerWidth = document.getElementById("header")?.clientWidth || window.outerWidth
        outerHeight = document.getElementById("header")?.clientHeight || window.outerHeight

        outerWidth -= 1;
        outerHeight -= 1;
    })

</script>

<!-- <svelte:window bind:outerHeight bind:outerWidth/> -->
<h1 id="header" class="text-red-600 text-center text-5xl font-extrabold">AutoScore</h1>
<!-- <ScoreTable scoreSucceed={autoScoreSucceed} scoreFail={autoScoreFail}/> -->