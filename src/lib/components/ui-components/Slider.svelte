<!-- A basic reference custom range component -->
<!-- Featuring: onChange events, Custom property theming, Tooltip, A11y keyboard controls + attributes, -->

<script>
	import Range from "./Range.svelte"	
	let value = 42;
	let theme = "default";
</script>

<div class:purple-theme={theme === "purple"}>
	<label for="basic-range">Range Label</label>
	<Range on:change={(e) => value = e.detail.value} id="basic-slider" />
</div>
<h3>
	{value}%
</h3>

		<h3>
			Theme: {theme}
		</h3>
		<div class="theme-buttons">
		<button on:click={() => theme = "default"}>
			Default
		</button>
				<button on:click={() => theme = "purple"}>
			Purple
		</button>
	</div>

<style>
	.purple-theme {
		--track-focus: #C368FF;
		--track-highlight-bgcolor: #C368FF;
		--track-highlight-bg: linear-gradient(90deg, #C368FF, #C965FF);
		--thumb-holding-outline: rgba(191, 102, 251, 0.3);
		--tooltip-bgcolor: #C368FF;
		--tooltip-bg: linear-gradient(45deg, #C368FF, #C965FF);
	}
	
	.theme-buttons {
		display: flex;
		justify-content: center;
	}

	h3 {
		text-align: center;
	}
	
	label {
		margin: 8px;
		font-size: 16px;
		font-weight: 600;
	}
</style>