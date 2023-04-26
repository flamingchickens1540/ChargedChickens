<script lang="ts">
    import TeleOpScoring from '$lib/assets/Teleop.png'
    import SucceessFailure from '$lib/assets/SuccessFailure.png'

    // Boolean to show or hide the fail success screen.
    export let succeedFailScreen: boolean = false

    /**
     * Handles the grid screen being clicked/pressed
     * @param gridIndex the row and column of grid that was selected
     */
    export let gridSelected: (gridIndex: number) => void
    /**
     * Handles the success-fail screen being clicked/pressed
     * @param succeed - If the robot successfully scored at the grid index
     */
    export let successFailSelected: (succeed: boolean) => void

    let tableWidth: number

    /**
     * Handles the double clicking of the mouse on the telescore canvas
     * The purpose is to increment one of the teleScoreFail stores based on which cell on the canvas grid was clicked
     *
     * @param mouse - Lets us access the position of the mouse onclick
     *
     */
    function mouseClicked(mouse: MouseEvent) {
        if (mouse.offsetY == tableWidth || mouse.offsetX == tableWidth) return

        if (succeedFailScreen) {
            successFailSelected(mouse.offsetX < tableWidth / 2)
            return
        }

        const gridIndex =
            Math.floor((mouse.offsetX / tableWidth) * 3) +
            Math.floor((mouse.offsetY / tableWidth) * 3) * 3

        gridSelected(gridIndex)
    }
</script>

<div
    on:mousedown={mouseClicked}
    bind:clientWidth={tableWidth}
    style="
<!-- background: #F0E6E6; -->;
padding: 2%;
border-width:2px;
border-color: black;
border-radius: 10px;
"
>
    <img src={succeedFailScreen ? SucceessFailure : TeleOpScoring} alt="" />
</div>
