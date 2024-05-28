import { json } from '@sveltejs/kit';
import prisma from '$lib/prisma';

// PUT /api/items/:id
export async function PUT({ request, params }) {
	const { profileId, title, mediaType, description, vote } = await request.json();
	let item;
	if (vote == 'up') {
		item = await prisma.mediaItem.update({
			where: { id: params.id },
			data: {
				voteCount: { increment: 1 }
			}
		});
	} else if (vote == 'down') {
		item = await prisma.mediaItem.update({
			where: { id: params.id },
			data: {
				voteCount: { decrement: 1 }
			}
		});
	} else {
		item = await prisma.mediaItem.update({
			where: { id: params.id },
			data: {
				profileId,
				title,
				mediaType,
				description
			}
		});
	}

	return json(item);
}
