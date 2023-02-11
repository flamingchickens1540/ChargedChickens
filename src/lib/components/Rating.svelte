<script>
	import Star from "./Star.svelte";

	export let rating = 0;
	export let num = 5;
	let hoverRating = null;
	const handleRate = (id) => () => {
		if (rating == 1 && id == 1) {
			rating = 0;
		} else {
			rating = id;
		}
	};
	let stars = Array.from({ length: num }, (__, i) => i + 1);
</script>

<div class="feedback">
	<span class="starContainer">
		<div class="flex flex-row">
			{#each stars as star}
				<Star
					filled={hoverRating ? hoverRating >= star : rating >= star}
					starValue={star}
					on:mouseleave={() => (hoverRating = null)}
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
