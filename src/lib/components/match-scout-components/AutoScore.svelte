<script lang="ts">
    import { team_number, auto_high_center_fail, auto_high_center_succeed, auto_high_left_fail, auto_high_left_succeed, auto_high_right_fail, auto_high_right_succeed, auto_low_center_fail, auto_low_center_succeed, auto_low_left_fail, auto_low_left_succeed, auto_low_right_fail, auto_low_right_succeed, auto_mid_center_fail, auto_mid_center_succeed, auto_mid_left_fail, auto_mid_left_succeed, auto_mid_right_fail, auto_mid_right_succeed, auto_score, cycle_times, defense_times } from "$lib/stores/matchScoutStores";
    import Teleop from "$lib/assets/Teleop.png";
    import SucceessFailure from '$lib/assets/SuccessFailure.png'
    import { Canvas, Layer } from "svelte-canvas";
    import { onMount } from 'svelte';
    import { DEBUG, info } from "$lib/stores/generalStores";

    let outerHeight : number
    let outerWidth : number

    let click: { row: number, col: number } | null = null
    team_number.set($info.robot?.team_key.split("").filter((_e, i) => i >= 3).join(''));
    let initialDefenseTime: number
    let lastCycleTimestamp: number

    const autoScoreSucceed = [
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
    const autoScoreFail = [
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
        const SuccessFailureImage = new Image();

        AutoScoreBoard.src = Teleop;
        SuccessFailureImage.src = SucceessFailure;
        
        if (click) {
            SuccessFailureImage.onload = () => {
                context.drawImage(SuccessFailureImage, 0, 0, outerWidth, outerWidth)
            }
        } else {
            AutoScoreBoard.onload = () => {
                context.drawImage(AutoScoreBoard, 0, 0, outerWidth, outerWidth)
          }
      }       
  };

    function handleBackClick() {
      click = null;
    }

    function mouseClicked(mouse: MouseEvent) {
        
        if (mouse.offsetY == outerWidth || mouse.offsetX == outerWidth) return

        if (!click) {
            click = { row: Math.floor(mouse.offsetY / outerWidth * 3), col: Math.floor(mouse.offsetX / outerWidth * 3) }
        } else {
            if (mouse.offsetX < outerWidth / 2) {
                autoScoreSucceed[click.col + click.row * 3].update(n => n + 1);

                const timestamp = Date.now();
                if (lastCycleTimestamp != null) $cycle_times.push((timestamp - lastCycleTimestamp) / 1000);
                lastCycleTimestamp = timestamp;
            }
            else {
                autoScoreFail[click.col + click.row * 3].update(n => n + 1);
            }
            click = null;
        }
    }

    onMount(() => {
        outerWidth = document.getElementById("header")?.clientWidth || window.outerWidth
        outerHeight = document.getElementById("header")?.clientHeight || window.outerHeight

        // outerWidth -= 20;
        // outerHeight -= 20;
        outerHeight /= 1.2;
        outerWidth /= 1.2;
    })

</script>

<!-- <svelte:window bind:outerHeight bind:outerWidth/> -->
<div class="grid grid-rows-1 grid-cols-1 place-items-center">
  <h1 id="header" class="text-purple-600 text-center text-5xl font-extrabold">AutoScore {$team_number}</h1>
</div>
  
  <div class="grid grid-rows-1 grid-cols-1 place-items-center">
      <Canvas
      width={outerWidth}
      height={outerWidth}   
      class="object-center"
      on:click={mouseClicked}
      >
          <Layer {render} />
      </Canvas>
  </div>

  {#if click}
    <div class="grid grid-rows-1 grid-cols-1 place-items-center">
      <button id="backBtn" class="w-40 h-20 outline" on:click={handleBackClick}>Back</button>
    </div>
  {/if}

<style>
    #successBtn {
      background-color: var(--success-color);
    }

    #failBtn {
      background-color: var(--fail-color);
    }

    #backBtn {
      background-color: beige;
    }

    div {
      font-family: "Poppins";
    }
</style>
