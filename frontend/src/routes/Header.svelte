<script>
	import logo from '$lib/images/logo.svg';

	let pages = [
		{ text: 'How It Works', url: '/about' },
		{ text: 'Learning Models', url: '/sverdle' },
		{ text: 'My Profile', url: '#' }
	];
</script>

<header class="sticky top-0 z-50">
	<div class="bg-black h-10" />
	<nav class="bg-gray-100 p-4 flex items-center justify-between">
		<!-- Logo -->
		<div class="flex items-center">
			<!-- SVG Logo -->
			<a href="/" class="flex items-center">
				<img src={logo} alt="Davincin" class="h-8 w-auto ml-4 mr-2 mb-2" />
			</a>
			<!-- Logo Text -->
			<span class="text-blue-600 text-sm mt-2">da Vinci to nth power</span>
		</div>

		<!-- Pages -->
		<div class="flex items-center space-x-12 ml-auto font-semibold">
			{#each pages as page}
				<a href={page.url} class="text-black hover:text-gray-300">{page.text}</a>
			{/each}
		</div>

		<!-- Buttons -->
		<div class="flex items-center space-x-4 ml-10 font-semibold">
			<button class="text-blue-600 px-4 py-2 hover:text-blue-500">Login</button>
			<button class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500">Sign Up</button>
		</div>
	</nav>
</header>

<style>
</style>
