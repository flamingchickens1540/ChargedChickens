<script>
    // Declaring props
    export let bgColor;
    export let text;
    export let fontSize;
</script>

<div>
    <button on:click style="background-color: {bgColor};font-size: {fontSize}">
        {text}
    </button>
</div>

<style>
    button {
        border: none;
        padding: 0.5rem 2rem;
        color: #fff;
        border-radius: 1rem;
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

 
</style>
