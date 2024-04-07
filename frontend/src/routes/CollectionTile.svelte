<script>
	/**
	 * @type {{ image: string; name: string; n_books: number; n_podcasts: number; n_videos: number; }}
	 */
	export let collection;
</script>

<div class="group relative">
	<div
		class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75"
	>
		<img src={collection.image} class="h-full w-full object-cover object-center" />
	</div>
	<div class="mt-4">
		<h3 class="text-lg font-bold text-black">
			<a href="#">
				<span aria-hidden="true" class="absolute inset-0"></span>
				{collection.name}
			</a>
		</h3>
	</div>
	<div class="flex justify-between">
		<p class="mt-1 text-sm text-gray-900">Books</p>
		<p class="text-sm font-medium text-gray-500">{collection.n_books}</p>
	</div>
	<div class="flex justify-between">
		<p class="mt-1 text-sm text-gray-900">Podcasts</p>
		<p class="text-sm font-medium text-gray-500">{collection.n_podcasts}</p>
	</div>
	<div class="flex justify-between">
		<p class="mt-1 text-sm text-gray-900">Videos</p>
		<p class="text-sm font-medium text-gray-500">{collection.n_videos}</p>
	</div>
</div>

<style>
</style>
