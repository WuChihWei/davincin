import { sentrySvelteKit } from '@sentry/sveltekit';
import { sveltekit } from '@sveltejs/kit/vite';
import { createRequire } from 'module';
import path from 'path';
import { defineConfig } from 'vite';

const { resolve } = createRequire(import.meta.url);

const prismaClient = `prisma${path.sep}client`;

const prismaClientIndexBrowser = resolve('@prisma/client/index-browser').replace(
	`@${prismaClient}`,
	`.${prismaClient}`
);

export default defineConfig(() => ({
	plugins: [
		sentrySvelteKit({
			sourceMapsUploadOptions: {
				org: 'davincin',
				project: 'davincin-app'
			}
		}),
		sveltekit()
	],
	resolve: {
		alias: { '.prisma/client/index-browser': path.relative(__dirname, prismaClientIndexBrowser) }
	}
}));
