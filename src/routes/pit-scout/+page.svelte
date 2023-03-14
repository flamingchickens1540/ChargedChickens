<script lang="ts">
    import Automation from '$lib/components/pit-scout-components/Automation.svelte'
    import CycleTime from '$lib/components/pit-scout-components/CycleTime.svelte'
    import Dimensions from '$lib/components/pit-scout-components/Dimensions.svelte'
    import Drivetrain from '$lib/components/pit-scout-components/Drivetrain.svelte'
    import Info from '$lib/components/pit-scout-components/Info.svelte'
    import Intake from '$lib/components/pit-scout-components/Intake.svelte'
    import Notes from '$lib/components/pit-scout-components/Notes.svelte'
    import Polish from '$lib/components/pit-scout-components/Polish.svelte'
    import Scoring from '$lib/components/pit-scout-components/Scoring.svelte'
    import Submit from '$lib/components/pit-scout-components/Submit.svelte'
    import Wheels from '$lib/components/pit-scout-components/Wheels.svelte'
</script>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
<link
    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
    rel="stylesheet"
/>

<svelte:head>
    <title>Pit Scout</title>
</svelte:head>

<body class="endBackground">
    <h1 class="makeFont">Pit Scout</h1>
    <Info />
    <br />
    <Dimensions />
    <br />
    <Drivetrain />
    <br />
    <Wheels />
    <br>
    <Polish />
    <br />
    <Scoring />
    <br />
    <Intake />
    <br />
    <Automation />
    <br />
    <CycleTime />
    <br />
    <Notes />
    <br />
    <Submit />
</body>

<style>
    .endBackground {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-left: 17px;
        padding-right: 17px;
        padding: 17px;
        font-family: 'Poppins';
    }
    .makeFont {
        font-size: 41px;
        font-weight: 401;
        color: blue;
    }
</style>
