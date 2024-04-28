import { writable } from 'svelte/store';

function createProfile() {
	const { subscribe, set } = writable(undefined);

	return {
		subscribe,
		getProfileByUsername: async (/** @type {string} */ username) => {
			const response = await fetch('/api/profiles/?username=' + username);
			const data = await response.json();
			set(data);
		}
	};
}

export const profile = createProfile();
