<script>
    // Declaring props
    export let bgColor = '',
        text = '',
        fontSize = '',
        height = '',
        width = ''
    export let amountOfRound = '1rem'
</script>

<div class="fontMaker">
    <button
        on:click
        on:touchstart
        on:touchend
        on:mousedown
        style="background-color: {bgColor};font-size: {fontSize}; border-radius: {amountOfRound}; height: {height}; width: {width}"
    >
        {text}
    </button>
</div>

<style>
    button {
        border: none;
        padding: 0.5rem 2rem;
        color: #fff;
        transition: all 250ms;
        transform-origin: center;
        box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25),
            inset 0px -2px 3px rgba(0, 0, 0, 0.25);
    }
    button:hover {
        cursor: pointer;
        transform: scale(0.975);
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
    }

    .fontMaker {
        font-family: 'Poppins';
    }
</style>
