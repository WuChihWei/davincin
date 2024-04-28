import { readable } from 'svelte/store';
import { onMount } from 'svelte';

export const collections = readable([], function start(set) {
	// Fetch collections data when the component is mounted
	onMount(async () => {
		const response = await fetch('/api/collections');
		const data = await response.json();
		set(data);
	});

	return function stop() {
		// No cleanup needed
	};
});
