import { URL_META_API_KEY } from '$env/static/private';
import { fail, redirect } from '@sveltejs/kit';

/** @satisfies {import('./$types').PageServerLoad} */
export const load = async ({ fetch, params }) => {
	const username = params.username;
	const response = await fetch(`/api/profiles?username=${username}`);
	const profile = await response.json();

	if (!profile) {
		throw redirect(303, '/');
	}

	return {
		profile
	};
};

/** @satisfies {import('./$types').Actions} */
export const actions = {
	add: async ({ request, fetch }) => {
		const data = await request.formData();
		const item = String(data.get('item'));
		const mediaType = String(data.get('mediaType'));
		const profileId = String(data.get('profileId'));

		// Syntax validation
		try {
			console.log('enter: ', data.get('mediaType'), item);
			new URL(item);
		} catch (error) {
			return fail(422, {
				item,
				mediaType,
				error: 'Invalid URL format'
			});
		}

		// Reachability validation
		try {
			let response = await fetch(item, {
				method: 'HEAD'
			});
			if (response.ok) {
				const options = {
					headers: {
						authorization: `Basic ${URL_META_API_KEY}`
					}
				};

				response = await fetch(`https://api.urlmeta.org/meta?url=${item}`, options);
				response = await response.json();
				console.log(response);

				const _ = await fetch('api/items', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						profileId,
						title: response.meta.title,
						description: response.meta.description,
						mediaType,
						originalUrl: item
						// TODO: thumbnailUrl: ''
					})
				});
			}
		} catch (error) {
			return fail(422, {
				item,
				mediaType,
				error: error.message
			});
		}
	}
};
