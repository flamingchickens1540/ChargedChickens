<script lang="ts">
    import TeleOpScoring from "$lib/assets/Teleop.png";
    import { Canvas, Layer } from "svelte-canvas";
    import { onMount } from 'svelte';
    import type { Writable } from "svelte/store";

    let outerHeight : number;
    let outerWidth : number;

    export let scoreSucceed : Writable<number>[];
    export let scoreFail : Writable<number>[];

    // @ts-ignore
    $: render = ({ context, width, height }) => {
        const ScoreBoard = new Image();

        ScoreBoard.src = TeleOpScoring;
        ScoreBoard.onload = () => {
            context.drawImage(ScoreBoard, 0, 0, width, height);
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
        
        scoreSucceed[col + row * 3].update(n => n++);
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
        
        scoreFail[col + row * 3].update(n => n++);
    }

    onMount(() => {
        outerWidth = document.getElementById("header")?.clientWidth || window.outerWidth
        outerHeight = document.getElementById("header")?.clientHeight || window.outerHeight

        outerWidth *= 0.8;
        outerHeight *= 0.8;
    })

</script>

<center>
    <Canvas
    width={outerWidth}
    height={outerWidth}
    on:click={mouseClicked} on:dblclick={mouseDoubleClicked}
    >
        <Layer {render} />
    </Canvas>
</center>