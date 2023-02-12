<script lang="ts">
	export let title = 'star';
	export let filled = false;
	 export let starValue: Number;
</script>

<style>
	.star {
		margin-right: 4px;
	}
	.starPath {
		fill: none;
		stroke: #ffff00;
	}
	.filled {
		fill: #ffff00;
	}
</style>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<svg width="31" height="31" viewBox="0 0 51 48" class="star" on:click data-starid={starValue}>
	<title>{title}</title>
	<path class:filled  data-starid={starValue} class="starPath" d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z" />
</svg> 