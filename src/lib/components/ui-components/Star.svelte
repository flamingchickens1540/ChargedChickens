<script lang="ts">
	export let title = 'star';
	export let starRating = 3;
	export let starValue: number;
</script>

<style>
	.star {
		margin-right: 4px;
	}
	.starPath {
		fill: gray;
	}
	.starFill {
		fill:#ffff00;
		transition: clip-path 0.4s ease-out;
	}
</style>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<svg width="30" height="30" viewBox="0 0 51 48" class="star" on:click data-starid={starValue}>
	<title>{title}</title>
	<path class="starPath" d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z" />

	<path clip-path="inset(0% {(starValue - starRating) * 100 }% 0% 0%)" class="starFill" d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z" /></svg>