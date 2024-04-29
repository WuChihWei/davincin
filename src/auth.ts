import prisma from '$lib/prisma';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { SvelteKitAuth } from '@auth/sveltekit';
import Google from '@auth/sveltekit/providers/google';
import { AUTH_SECRET } from "$env/static/private" 

export const { handle, signIn, signOut } = SvelteKitAuth({
	adapter: PrismaAdapter(prisma),
	providers: [Google],
	trustHost: true,
  	secret: AUTH_SECRET,
});
