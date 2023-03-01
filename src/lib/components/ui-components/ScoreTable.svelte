<script lang="ts">
    import TeleOpScoring from "$lib/assets/Teleop.png";
    import { Canvas, Layer } from "svelte-canvas";
    import { onMount } from 'svelte';
    import { info } from "$lib/stores/generalStores";
    import type { Writable } from "svelte/store";
    
    const margin = 5;
    const padding = 2;
    const borderWidth = 2;

    export let fail : Writable<number>[];
    export let success : Writable<number>[];

    let outerWidth : number;

    let clicked: boolean = false;
    let gridIndex : number;

    let succeed: boolean = false;

    // @ts-ignore
    $: render = ({ context }) => {
    const TeleOpScoreBoard = new Image();

    TeleOpScoreBoard.src = TeleOpScoring;

    TeleOpScoreBoard.onload = () => {
        context.drawImage(TeleOpScoreBoard, 0, 0, outerWidth, outerWidth);
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
    * @todo
    * Make clicking display a success/fail choice component
    * 
    */
    function mouseClicked(mouse : MouseEvent) {
        if(mouse.offsetY == outerWidth || mouse.offsetX == outerWidth)
            return;

        gridIndex = Math.floor(mouse.offsetX / outerWidth * 3) + Math.floor(mouse.offsetY / outerWidth * 3) * 3;
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

    onMount(() => {
    outerWidth = window.outerWidth * (100 - margin - padding - borderWidth)/100;
    })

</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
<!-- <svelte:window bind:outerHeight bind:outerWidth/> -->
<div class = "grid grid-rows-1 grid-cols-2 place-items-center">
<div class = ""> Endgame </div>
<div class = ""> {$info.robot?.team_key} </div>
</div>

{#if clicked}
<div class="grid grid-rows-1 grid-cols-2 place-items-center" style="">
<button id="successBtn" class="w-40 h-40 outline failSuccessButton" class:succeededButton={succeed} on:click={handleSuccessClick}>Success</button>
<button id="failBtn" class="w-40 h-40 outline failSuccessButton"  class:failedButton={!succeed} on:click={handleFailClick}>Failure</button>
</div>
<br>
<div class="grid grid-rows-1 grid-cols-1 place-items-center">
<button id="backBtn" class="w-40 h-40 outline" on:click={handleBackClick}>Back</button>
</div>
{:else}
<div on:mousedown={mouseClicked} style="
background: #F0E6E6;
padding: {padding}vw;
margin: {margin}vw;
border-width:{borderWidth}vw;
border-color: black;
border-radius: 5vw;
">
<img src={TeleOpScoring} alt=""/>
</div>
<!-- <Canvas
width={outerWidth}
height={outerWidth}
class="object-center"
on:click={mouseClicked}
style="
>
<Layer {render} />
</Canvas> -->
{/if}

<style>
    /* LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL KMS */
    .failSuccessButton {
        background-color: #fcf7f7;
    }

    .failedButton {
        background-color: #db0f0f;
    }

    .succeededButton {
        background-color: #0fdb1a;
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