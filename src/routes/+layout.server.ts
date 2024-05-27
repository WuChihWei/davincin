/** @type {import('./$types').LayoutServerLoad} */
export async function load({locals, fetch}) {
	const session = await locals.auth();
	if (session) {
		const response = await fetch(`/api/users?email=${session?.user?.email}`);
		session.user = await response.json();
	}
	
	return {
		session
	};
}
