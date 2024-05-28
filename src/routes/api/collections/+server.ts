import { json } from '@sveltejs/kit';
import prisma from '$lib/prisma';
import { groupBy } from 'lodash-es';
import { MediaType } from '@prisma/client';

// GET /api/collections
export async function GET() {
	const _profile = await prisma.profile.findMany({
		where: {
			isPublic: true
		},
		include: {
			collection: true
		}
	});

	const collections = _profile.map((profile) => {
		const media = groupBy(profile.collection, 'mediaType');
		Object.keys(MediaType).forEach((key) => {
			const lowerKey = key.toLowerCase();
			if (media[key]) {
				if (lowerKey !== key) {
					media[lowerKey + 's'] = media[key];
					delete media[key];
				}
			} else {
				media[lowerKey + 's'] = [];
			}
		});

		return {
			profile: {
				name: profile.name,
				username: profile.username,
				avatarUrl: profile.avatarUrl
			},
			media,
			counts: {
				books: media.books.length,
				podcasts: media.podcasts.length,
				videos: media.videos.length
			}
		};
	});

	return json(collections);
}
