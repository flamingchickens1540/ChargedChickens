<script lang="ts">
  import Automation from "$lib/components/pit-scout-components/Automation.svelte";
  import CycleTime from "$lib/components/pit-scout-components/CycleTime.svelte";
  import Dimensions from "$lib/components/pit-scout-components/Dimensions.svelte";
  import Drivetrain from "$lib/components/pit-scout-components/Drivetrain.svelte";
  import Info from "$lib/components/pit-scout-components/Info.svelte";
  import Intake from "$lib/components/pit-scout-components/Intake.svelte";
  import Notes from "$lib/components/pit-scout-components/Notes.svelte";
  import Polish from "$lib/components/pit-scout-components/Polish.svelte";
  import Scoring from "$lib/components/pit-scout-components/Scoring.svelte";
  import Submit from "$lib/components/pit-scout-components/Submit.svelte";
  import Wheels from "$lib/components/pit-scout-components/Wheels.svelte";
</script>

<svelte:head>
	<title>Pit Scout</title>
</svelte:head>

<body>
	<h1 class="text-red-600 text-4xl text-center font-bold">Pit Scout</h1>
	<Info />
	<br>
	<Dimensions />
	<br>
	<Drivetrain />
	<br>
	<Wheels />
	<br>
	<Polish />
	<br>
	<Scoring />
	<br>
	<Intake />
	<br>
	<Automation />
	<br>
	<CycleTime />
	<br>
	<Notes />
	<br>
	<Submit />
</body>