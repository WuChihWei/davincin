import { json } from '@sveltejs/kit';
import prisma from '$lib/prisma';

// POST /api/items
export async function POST({ request }) {
	const { profileId, title, mediaType, description, originalUrl } = await request.json();
	const profile = await prisma.mediaItem.create({
		data: {
			profileId,
			title,
			mediaType,
			description,
			originalUrl
		}
	});
	return json(profile);
}
