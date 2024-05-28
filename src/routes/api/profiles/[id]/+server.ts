import { json } from '@sveltejs/kit';
import prisma from '$lib/prisma';

// PUT /api/profiles/:id
export async function PUT({ request, params }) {
	const { name, username, bio, gender, avatarUrl, isPublic } = await request.json();
	const profile = await prisma.profile.update({
		where: { id: params.id },
		data: {
			name,
			username,
			bio,
			gender,
			avatarUrl,
			isPublic
		}
	});

	return json(profile);
}
