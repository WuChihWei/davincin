import { json } from '@sveltejs/kit';
import image from '$lib/images/davinci_1.png';

export async function GET(event) {
	const collections = [
		{
			id: 1,
			profile: {
				id: 1,
				name: 'Davinci 1',
				userId: 'davinci_1',
				avatarURL: image
			},
			media: {
				books: [],
				podcasts: [],
				videos: []
			},
			counts: {
				books: 132,
				podcasts: 4,
				videos: 12
			}
		},
		{
			id: 2,
			profile: {
				id: 2,
				name: 'Davinci 2',
				userId: 'davinci_2',
				avatarURL: image
			},
			media: {
				books: [],
				podcasts: [],
				videos: []
			},
			counts: {
				books: 132,
				podcasts: 4,
				videos: 12
			}
		},
		{
			id: 3,
			profile: {
				id: 3,
				name: 'Davinci 3',
				userId: 'davinci_3',
				avatarURL: image
			},
			media: {
				books: [],
				podcasts: [],
				videos: []
			},
			counts: {
				books: 132,
				podcasts: 4,
				videos: 12
			}
		},
		{
			id: 4,
			profile: {
				id: 4,
				name: 'Davinci 4',
				userId: 'davinci_4',
				avatarURL: image
			},
			media: {
				books: [],
				podcasts: [],
				videos: []
			},
			counts: {
				books: 132,
				podcasts: 4,
				videos: 12
			}
		},
		{
			id: 5,
			profile: {
				id: 5,
				name: 'Davinci 5',
				userId: 'davinci_5',
				avatarURL: image
			},
			media: {
				books: [],
				podcasts: [],
				videos: []
			},
			counts: {
				books: 132,
				podcasts: 4,
				videos: 12
			}
		},
		{
			id: 6,
			profile: {
				id: 6,
				name: 'Davinci 6',
				userId: 'davinci_6',
				avatarURL: image
			},
			media: {
				books: [],
				podcasts: [],
				videos: []
			},
			counts: {
				books: 132,
				podcasts: 4,
				videos: 12
			}
		}
	];

	return json(collections);
}
