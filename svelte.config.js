import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		scss: { includePaths: ['src', 'node_modules'] }
	}),

	kit: {
		adapter: adapter({ out: 'build' }),
		target: '#svelte',
	}
};

export default config;
