<script lang="ts">
    import TeleOpScoring from "$lib/assets/Teleop.png";
    import { onMount } from 'svelte';
    import type { Writable } from "svelte/store";

    export let success : Writable<number>[];
    //To make sure that fail will be success if there's no value
    export let fail : Writable<number>[] = success;


    let tableWidth : number;

    let clicked: boolean = false;
    let gridIndex : number;

    let succeed: boolean = false;

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
    * @todo
    * Make clicking display a success/fail choice component
    * 
    */
    function mouseClicked(mouse : MouseEvent) {
        if(mouse.offsetY == tableWidth || mouse.offsetX == tableWidth)
            return;

        gridIndex = Math.floor(mouse.offsetX / tableWidth * 3) + Math.floor(mouse.offsetY / tableWidth * 3) * 3;
        console.log(gridIndex);
        clicked = true;
    }

    /**
    * Toggles the success boolean, and changes the color of the success button
    */
    function handleSuccessClick() {
        succeed = true;
    }

    /**
    * Toggles the fail boolean, and changes the color of the fail button
    * 
    */
    function handleFailClick() {
        succeed = false;
    }
    /**
    * Increments fail or succeed for a given tile based on if success and/or fail was clicked
    * Resets clicked to false, removing success/fail/button elements
    * 
    * @complete
    */
    function handleBackClick() {
        (succeed ? success[gridIndex] : fail[gridIndex]).update(n => n+1);
        clicked = succeed = false;
    }
</script>

{#if clicked}
<div class="grid grid-rows-1 grid-cols-2 place-items-center" style="">
<button class="w-40 h-40 outline failSuccessButton" class:succeededButton={succeed} on:click={handleSuccessClick}>Success</button>
<button class="w-40 h-40 outline failSuccessButton"  class:failedButton={!succeed} on:click={handleFailClick}>Failure</button>
</div>
<br>
<div class="grid grid-rows-1 grid-cols-1 place-items-center">
<button class="w-40 h-40 outline backBtn" on:click={handleBackClick}>Back</button>
</div>
{:else}
<div on:mousedown={mouseClicked} bind:clientWidth={tableWidth} style="
<!-- background: #F0E6E6; -->;
padding: 2%;

border-width:0.75vw;
border-color: black;
border-radius: 1.5vw;
">
<img src={TeleOpScoring} alt=""/>
</div>
<!-- <Canvas
width={tableWidth}
height={tableWidth}
class="object-center"
on:click={mouseClicked}
style="
>
<Layer {render} />
</Canvas> -->
{/if}

<style>
    /* LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL KMS */
    /* real */
    .failSuccessButton {
        background-color: #fcf7f7;
    }

    .failedButton {
        background-color: #db0f0f;
    }

    .succeededButton {
        background-color: #0fdb1a;
    }

    .backBtn {
      background-color: beige;
    }

        /* .endgameTitle{
        display: flex;
        font-family: "Poppins";
        font-size: 36px; 
        padding-top: 11px;
        padding-left: 2px;      
        width: 50%;
        }

    .endgameTitleNumbers{
        display: flex;
        font-family: "Poppins";
        font-size: 36px; 
        padding-top: 11px;
        width: 50%;
        justify-content: right;
        padding-right: 11px;
    } */
    div {
        font-family: "Poppins";
    }
</style>