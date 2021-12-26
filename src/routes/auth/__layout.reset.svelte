<script>
	import { fade } from 'svelte/transition';
	import '/src/app.css';
</script>

<main transition:fade>
	<slot />
</main>

<style lang="scss">
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: relative;
		width: 100%;
		height: auto;

		min-height: 100vh;
		background-image: url('/images/shapes.png');
		background-repeat: repeat-y;
		slot {
			z-index: 9999;
		}
	}
</style>
