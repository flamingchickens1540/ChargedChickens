<script lang="ts">
    import Switch from '$lib/components/ui-components/Switch.svelte'
    export let checked: boolean
    export let name: string
    export let stack = false
</script>

<link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet" />
<div class="makeBorder" class:stack>
    <div class="testBorder">
        <h1>{name}</h1>
    </div>
    <div class="brokeSwitchRight">
        <Switch bind:checked />
    </div>
</div>

<style>
    .testBorder {
        /* Credit: David */
        display: flex;
        align-items: right;
        justify-content: left;
        width: 75%;
        text-indent: 11px;
    }
    .makeBorder {
        display: flex;
        align-items: center;
        font-family: 'Poppins';
        font-size: 23px;
        border-width: 2px;
        border-color: black;
        border-radius: 10px;
        background-color: #efdcdc;
        padding: 7px;
    }

    .brokeSwitchRight {
        display: flex;
        padding-right: 1vw;
        justify-content: right;
        width: 25%;
    }

    .stack {
        border-top-right-radius: 0px;
        border-top-left-radius: 0px;
        padding-top: 3px;
        margin-top: -7px;
    }
</style>
