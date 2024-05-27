/** @satisfies {import('./$types').PageServerLoad} */
export const load = async ({ fetch }) => {
	const response = await fetch('/api/collections');
	const collections = await response.json();

	return { collections }
};