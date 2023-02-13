<script lang="ts">
	import Star from "./Star.svelte";

	export let rating = 3;
	export let num = 5;
	let hoverRating: number | null = null;
	const handleRate = (id: number) => () => rating = id;
	let stars = Array.from({ length: num }, (__, i) => i);
</script>

<div class="feedback">
	<span class="starContainer">
		<div class = "flex flex-row">
			{#each stars as star}
				<Star
					filled={hoverRating ? hoverRating >= star : rating >= star}
					starValue={star}
					on:click={handleRate(star)}
				/>
			{/each}
		</div>
	</span>
</div>

<style>
	.feedback {
		position: relative;
	}

	.starContainer { 
		display: inline-block;
		border-radius: 8px;
		padding: 4px 6px 0;
	}

	:global(button) {
		cursor: pointer;
	}
</style>
