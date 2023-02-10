<script>
	export let title = 'star';
	export let filled = false;
	export let starValue;
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


<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 51 48" class="star" on:mouseover on:mouseleave on:click data-starid={starValue} let:class>
	<title>{title}</title>
	<path class:filled  data-starid={starValue} class="starPath" d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z" />
</svg> 