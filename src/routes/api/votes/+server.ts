import prisma from '$lib/prisma';
import { json } from '@sveltejs/kit';

// GET /api/votes?itemId={itemId}&userId={userId}
export async function GET({ url }) {
	const itemId = url.searchParams.get('itemId') ?? undefined;
	const userId = url.searchParams.get('userId') ?? undefined;
	const vote = await prisma.vote.findFirst({
		where: {
			itemId,
			userId
		}
	});

	return json(vote);
}
