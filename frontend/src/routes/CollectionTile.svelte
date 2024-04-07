<script>
	import Icon from '@iconify/svelte';
	/**
	 * @type {{ image: string; name: string; n_books: number; n_podcasts: number; n_videos: number; }}
	 */
	export let collection;
</script>

<div class="group relative">
	<div
		class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75"
	>
		<div class="relative">
			<img src={collection.image} class="h-full w-full object-cover object-center" />
			<span
				class="absolute top-3 right-3 inline-flex items-center rounded-full bg-white px-3 py-1 text-md font-bold text-red-400"
			>
				<Icon icon="icon-park-solid:fire" style="font-size: 25px;" />
				<span class="ml-1">Hot</span>
			</span>
		</div>
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
		<div class="flex items-center">
			<Icon icon="ri:book-fill" style="font-size: 18px;" />
			<p class="ml-1 mt-1 text-sm text-gray-900">Books</p>
		</div>
		<p class="text-sm font-medium text-gray-500">{collection.n_books}</p>
	</div>
	<div class="flex justify-between">
		<div class="flex items-center">
			<Icon icon="lets-icons:video-fill" style="font-size: 18px;" />
			<p class="ml-1 mt-1 text-sm text-gray-900">Podcasts</p>
		</div>
		<p class="text-sm font-medium text-gray-500">{collection.n_podcasts}</p>
	</div>
	<div class="flex justify-between">
		<div class="flex items-center">
			<Icon icon="mdi:podcast" style="font-size: 18px;" />
			<p class="ml-1 mt-1 text-sm text-gray-900">Videos</p>
		</div>
		<p class="text-sm font-medium text-gray-500">{collection.n_videos}</p>
	</div>
</div>

<style>
</style>
