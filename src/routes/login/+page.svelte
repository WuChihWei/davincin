<script>
	import { signIn, signOut } from '@auth/sveltekit/client';
	import Icon from '@iconify/svelte';

	let email = '';
	let password = '';
</script>

<div class="flex min-h-screen min-w-full bg-white -m-4">
	<div class="flex items-center justify-center w-3/5 bg-gradient-custom">
		<div class="space-y-6">
			<h2 class="text-4xl font-semibold text-white">Learn with Your Role Models</h2>
			<h3 class="text-md text-white">To create the most motivating learning methods</h3>
			<button
				class="flex items-center px-10 py-3 text-white bg-blue-600 rounded-3xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
			>
				<a href="/how-it-works" class="hover:no-underline">How it works</a>
			</button>
		</div>
	</div>
	<div class="flex items-center justify-center w-2/5">
		<div class="w-72">
			<h2 class="text-2xl font-semibold text-black">Hello again!</h2>
			<h3 class="text-lg font-semibold text-black">Welcome back</h3>
			<div class="py-6 space-y-6">
				<div class="space-y-4">
					<button
						on:click={() => signIn('facebook')}
						class="flex items-center justify-center w-full py-3 text-white bg-blue-600 rounded-3xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
					>
						<Icon icon="ic:baseline-facebook" style="font-size: 25px;" />
						<span class="ml-2">Login with Facebook</span>
					</button>
					<button
						on:click={() => signIn('google')}
						class="flex items-center justify-center w-full py-3 text-white bg-red-600 rounded-3xl hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
					>
						<Icon icon="ri:google-fill" style="font-size: 25px;" />
						<span class="ml-2">Login with Google</span>
					</button>
				</div>
				<div class="flex items-center my-6">
					<div class="flex-grow border-t border-gray-300"></div>
					<span class="mx-4 text-gray-500">or</span>
					<div class="flex-grow border-t border-gray-300"></div>
				</div>
				<div class="space-y-4">
					<div>
						<div class="relative mt-2 rounded-3xl shadow-sm">
							<div
								class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400"
							>
								<Icon icon="line-md:email" style="font-size: 25px;" />
							</div>
							<input
								bind:value={email}
								name="email"
								type="email"
								autocomplete="email"
								placeholder="Email address"
								required
								class="block w-full rounded-3xl border-0 py-3 pl-12 pr-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>
					<div class="relative mt-2 rounded-3xl shadow-sm">
						<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
							<Icon icon="ph:password-duotone" style="font-size: 25px;" />
						</div>
						<input
							bind:value={password}
							name="password"
							type="password"
							autocomplete="current-password"
							required
							placeholder="Password"
							class="block w-full rounded-3xl border-0 py-3 pl-12 pr-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>
				<button
					on:click={() => signIn('credentials', { email, password })}
					class="flex items-center justify-center w-full px-6 py-3 text-white bg-blue-600 rounded-3xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
				>
					Login
				</button>
				<a href="#" class="flex items-center justify-center">Forgot password?</a>
			</div>
		</div>
	</div>
</div>

<style>
	.bg-gradient-custom {
		background: linear-gradient(180deg, #ffecec 0%, #02298a 99.99%, #5274f2 100%);
	}
</style>
