import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world in 2021'
	}
});

export default app;