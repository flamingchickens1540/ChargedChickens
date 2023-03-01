<script lang="ts">
	import Star from "./Star.svelte";
	export let rating = 3;
	const handleRate = (id: number) => () => rating = id;
	let stars = Array.from({ length: 5 }, (__, i) => i+1);
</script>

<div class="feedback">
	<span class="starContainer">
		<div class = "flex flex-row">
			{#each stars as star}
				<Star
					bind:starRating={rating}
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