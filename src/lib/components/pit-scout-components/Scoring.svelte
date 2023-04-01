<script lang="ts">
    import {
        high_left,
        high_center,
        high_right,
        mid_left,
        mid_center,
        mid_right,
        low_left,
        low_center,
        low_right,
    } from '$lib/stores/pitScoutStores'
    import TeleOpScoring from '$lib/assets/TeleOpScoring-removebg-preview.png'
    import { onMount } from 'svelte'
    import { Canvas, Layer } from 'svelte-canvas'
    import { DEBUG } from '$lib/generalStores'
    import type { Click } from '$lib/types'

    let scoring = [
        high_left,
        high_center,
        high_right,
        mid_left,
        mid_center,
        mid_right,
        low_left,
        low_center,
        low_right,
    ]
    let click: Click;
    // @ts-ignore
    $: render = ({ context }) => {
        const ScoreBoard = new Image()
        ScoreBoard.src = TeleOpScoring
        ScoreBoard.onload = () => {
            context.drawImage(ScoreBoard, 0, 0, outerWidth, outerWidth)
        }
        let count = 0
        if (click) {
            // The index on a 1d array of the tile
            scoring.forEach((tile) => {
                let held_value: boolean = false
                tile.subscribe((value) => (held_value = value))
                let tile_num = count
                let rect_size = outerWidth / 3
                let x = (tile_num % 3) * rect_size
                let y = Math.floor(tile_num / 3) * rect_size

                if (held_value) {
                    context.fillStyle = 'rgba(38, 213, 71)'
                    context.fillRect(x, y, rect_size, rect_size)
                }
                count++
            })
        }
    }
    function mouseClicked(mouse: MouseEvent) {
        if (mouse.offsetY == outerWidth || mouse.offsetX == outerWidth) return
        click = {
            row: Math.floor((mouse.offsetY / outerWidth) * 3),
            col: Math.floor((mouse.offsetX / outerWidth) * 3),
        }
        let held_value: boolean = false
        scoring[click.col + click.row * 3].subscribe(
            (value) => (held_value = value)
        )

        scoring[click.col + click.row * 3].set(!held_value)
    }
    onMount(() => {
        outerWidth = window.outerWidth
    })
</script>

<h1 id="scoring" class="text-purple-600 text-center text-4xl font-extrabold">
    Where can it score?
</h1>
<div class="grid grid-row-1 grid-cols-1 place-items-center">
    <Canvas width={outerWidth} height={outerWidth} on:click={mouseClicked}>
        <Layer {render} />
    </Canvas>
</div>

<style>
    div {
        font-family: 'Poppins';
    }
</style>
