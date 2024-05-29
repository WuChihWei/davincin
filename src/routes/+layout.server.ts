/** @type {import('./$types').LayoutServerLoad} */
export async function load({ locals, fetch }) {
	const session = await locals.auth();
	if (session) {
		// TODO: handle this logic somewhere else (check profiles length)
		let response = await fetch(`/api/users?email=${session?.user?.email}`);
		session.user = await response.json();
		console.log('LayoutServerLoad: ', session)
		const data = {
			name: session.user.name,
			username: session.user.username,
			userId: session.user.id
		};
		if (!session.user.profiles.length) {
			response = await fetch('api/profiles', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			});
			const profile = await response.json();
			session.user.profiles.push(profile);
		}
	}

	return {
		session
	};
}
