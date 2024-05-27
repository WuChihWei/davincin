import { redirect } from '@sveltejs/kit';

/** @satisfies {import('./$types').PageServerLoad} */
export const load = async ({ fetch, params }) => {
	const username = params.username;
	const response = await fetch(`/api/profiles?username=${username}`);
	const profile = await response.json();

	if (!profile) {
		throw redirect(303, '/');
	}

	return { profile };
};
