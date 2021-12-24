<script>
	import Header from '$lib/common/Header.svelte';
	import Footer from '$lib/common/Footer.svelte';
	import { fade } from 'svelte/transition';
</script>

<Header user="332" />

<main transition:fade>
	<slot />
</main>

<Footer />

<style lang="scss">
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: relative;
		width: 100%;
		height: auto;
		background-color: #f7f7f7;
		margin-top: 81px;
		background-image: url('/images/shapes.png');
		background-repeat: repeat-y;
		slot {
			z-index: 9999;
		}
	}
</style>
