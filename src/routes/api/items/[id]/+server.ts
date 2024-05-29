import { json } from '@sveltejs/kit';
import prisma from '$lib/prisma';
import { VoteType } from '@prisma/client';

// PUT /api/items/:id
export async function PUT({ request, params }) {
	// TODO: get userId from auth header
	const { profileId, title, mediaType, description, vote, userId } = await request.json();
	let item;
	if (vote == VoteType.UP) {
		item = await prisma.mediaItem.update({
			where: { id: params.id },
			data: {
				voteCount: { increment: 1 }
			}
		});

		await prisma.vote.create({
			data: {
				type: VoteType.UP,
				userId: userId,
				itemId: params.id
			}
		});
	} else if (vote == VoteType.DOWN) {
		item = await prisma.mediaItem.update({
			where: { id: params.id },
			data: {
				voteCount: { decrement: 1 }
			}
		});

		await prisma.vote.create({
			data: {
				type: VoteType.UP,
				userId: userId,
				itemId: params.id
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
