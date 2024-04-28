import { json } from '@sveltejs/kit';
import prisma from '$lib/prisma';

// GET /api/collections
export async function GET() {
	const _collections = await prisma.collection.findMany({
		include: {
			profile: true
		}
	});

	const collections = _collections.map(({ id, profile, media }) => ({
		id,
		profile,
		counts: {
			books: media.books.length,
			podcasts: media.podcasts.length,
			videos: media.videos.length
		}
	}));

	return json(collections);
}
