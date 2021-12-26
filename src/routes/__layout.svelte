<script context="module">
	export const load = async ({page}) => ({
		props: {
			key: page.path
		}
	})
</script>

<script>
	import '/src/app.css';
	import Header from '$lib/common/Header.svelte';
	import Footer from '$lib/common/Footer.svelte';
	import PageTransition from "$lib/common/PageTransition.svelte";
	export let key;
</script>

<Header user="332" />

<PageTransition refresh={key}>
	<slot />
</PageTransition>

<Footer />

<style lang="scss">
	slot {
		z-index: 9999;
	}
</style>
