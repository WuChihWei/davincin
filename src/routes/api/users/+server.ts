import { json } from '@sveltejs/kit';
import prisma from '$lib/prisma';
import image from '$lib/images/davinci_1.png';

// POST /api/users
export async function POST({ request }) {
	const { username, email } = await request.json();
	const user = await prisma.user.create({
		data: {
			username,
			email,
			profiles: {
				create: [
					{
						name: username,
						username,
						avatarUrl: image
					}
				]
			}
		}
	});

	return json(user);
}

// GET /api/users?username={username}&email={email}
export async function GET({ url }) {
	const username = url.searchParams.get('username') ?? undefined;
	const email = url.searchParams.get('email') ?? undefined;
	const user = await prisma.user.findUnique({
		where: {
			username,
			email
		},
		include: {
			profiles: true
		}
	});

	return json(user);
}
