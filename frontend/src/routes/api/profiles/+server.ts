import { json } from '@sveltejs/kit';
import image from '$lib/images/davinci_1.png';
import prisma from '$lib/prisma';

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
			avatarUrl: image,
			collection: {
				create: {
					media: {
						books: [],
						podcasts: [],
						videos: []
					}
				}
			}
		}
	});

	return json(profile);
}

// GET /api/profiles?username={username}
export async function GET({ url }) {
	const username = url.searchParams.get('username') ?? undefined;
	const profile = await prisma.profile.findUnique({
		where: {
			username
		},
		include: {
			collection: true
		}
	});

	return json(profile);
}
