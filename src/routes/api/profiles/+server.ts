import { json } from '@sveltejs/kit';
import prisma from '$lib/prisma';
import { MediaType } from '@prisma/client/edge';
import { groupBy } from 'lodash-es';

// POST /api/profiles
export async function POST({ request }) {
	const { name, username, userId, bio, gender } = await request.json();
	const profile = await prisma.profile.create({
		data: {
			name,
			username,
			userId,
			bio,
			gender,
		}
	});

	return json(profile);
}

// GET /api/profiles?username={username}
export async function GET({ url }) {
	const username = url.searchParams.get('username') ?? undefined;
	const _profile = await prisma.profile.findUnique({
		where: {
			username
		},
		include: {
			collection: true
		}
	});

	let profile = {};

	if (_profile) {
		const collection = groupBy(_profile.collection, 'mediaType');
		Object.keys(MediaType).forEach((key) => {
			const lowerKey = key.toLowerCase();
			if (collection[key]) {
				if (lowerKey !== key) {
					collection[lowerKey + 's'] = collection[key];
					delete collection[key];
				}
			} else {
				collection[lowerKey + 's'] = [];
			}
		});
		profile = {
			..._profile,
			collection
		};
	}

	return json(profile);
}
