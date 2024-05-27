import prisma from '$lib/prisma';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { SvelteKitAuth } from '@auth/sveltekit';
import Google from '@auth/sveltekit/providers/google';
import { AUTH_SECRET } from '$env/static/private';
import Credentials from '@auth/sveltekit/providers/credentials';
import Facebook from '@auth/sveltekit/providers/facebook';
import type { DefaultSession } from '@auth/sveltekit';

declare module "@auth/sveltekit" {
	interface Session {
	  user: {
		username: string
	  } & DefaultSession["user"]
	}
}

export const { handle, signIn, signOut } = SvelteKitAuth({
	adapter: PrismaAdapter(prisma),
	providers: [
		Credentials({
			credentials: {
				email: {},
				password: {}
			},
			authorize: async (credentials) => {
				let user = null;

				// logic to salt and hash password
				//   const pwHash = saltAndHashPassword(credentials.password)

				// logic to verify if user exists
				//   user = await getUserFromDb(credentials.email, pwHash)

				if (!user) {
					throw new Error('User not found.');
				}

				// return json object with the user data
				return user;
			}
		}),
		Google,
		Facebook
	],
	pages: {
		signIn: '/login'
	},
	trustHost: true,
	secret: AUTH_SECRET
});
