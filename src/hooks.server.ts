import * as Sentry from '@sentry/sveltekit';
import { redirect, type Handle } from '@sveltejs/kit';
import { handle as authenticationHandle } from './auth';
import { sequence } from '@sveltejs/kit/hooks';

Sentry.init({
	dsn: 'https://053c38bef4b1256df903d08462b97111@o4507340149030912.ingest.de.sentry.io/4507340151390288',
	tracesSampleRate: 1
});

/** @type {import('@sveltejs/kit').Handle} */
async function authorizationHandle({ event, resolve }) {
	const session = await event.locals.auth();
	if (event.route.id.includes('/(unprotected)/')) {
		if (session) {
			throw redirect(303, '/');
		}
	}

	// If the request is still here, just proceed as normally
	return resolve(event);
}

// First handle authentication, then authorization
// Each function acts as a middleware, receiving the request handle
// And returning a handle which gets passed to the next function
export const handle: Handle = sequence(
	Sentry.sentryHandle(),
	sequence(authenticationHandle, authorizationHandle)
);

/** @type {import('@sveltejs/kit').HandleServerError} */
export const handleError = Sentry.handleErrorWithSentry();
