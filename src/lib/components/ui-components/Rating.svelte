<script lang="ts">
	/**
	 * This component displays three dynamic clickable stars, that change color depending on which have been clicked, and bind to a rating variable
	*/

	import Star from "./Star.svelte";
	export let rating = 3;
	
	/**
	 * Makes the rating equal to the value of the clicked star
	 * @param id
	 */
	const handleRate = (id: number) => () => rating = id;

	/**
	 * Adjust the length to change how many stars there are.
	 * The Svelte for loop iterates through this array, displaying a star for each index.
	 * The star's number in the array is equal to what the rating becomes when the star is clicked.
	 */
	let stars: number[] = Array.from({ length: 5 }, (__, i) => i+1);
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