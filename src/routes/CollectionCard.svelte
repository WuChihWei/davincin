<script>
	import image from '$lib/images/davinci_1.png';
	import Icon from '@iconify/svelte';
	import { goto } from '$app/navigation';

	/**
	 * @type {{ profile: { username: string; avatarUrl: string; name: string; }; counts: { books: number; podcasts: number; videos: number; }; }}
	 */
	export let collection;
</script>

<div class="group relative" on:click={() => goto(collection.profile.username)}>
	<div
		class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75"
	>
		<div class="relative">
			<img
				src={collection.profile.avatarUrl || image}
				class="h-full w-full object-cover object-center"
			/>
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
			<a href={'/' + collection.profile.username}>
				<span aria-hidden="true" class="absolute inset-0"></span>
				{collection.profile.name}
			</a>
		</h3>
	</div>
	<div class="flex justify-between mt-1">
		<div class="flex items-center">
			<Icon icon="ri:book-fill" style="font-size: 18px;" />
			<p class="ml-1 text-sm text-gray-900">Books</p>
		</div>
		<p class="text-sm font-medium text-gray-500">{collection.counts.books}</p>
	</div>
	<div class="flex justify-between mt-1">
		<div class="flex items-center">
			<Icon icon="lets-icons:video-fill" style="font-size: 18px;" />
			<p class="ml-1 text-sm text-gray-900">Podcasts</p>
		</div>
		<p class="text-sm font-medium text-gray-500">{collection.counts.podcasts}</p>
	</div>
	<div class="flex justify-between mt-1">
		<div class="flex items-center">
			<Icon icon="mdi:podcast" style="font-size: 18px;" />
			<p class="ml-1 text-sm text-gray-900">Videos</p>
		</div>
		<p class="text-sm font-medium text-gray-500">{collection.counts.videos}</p>
	</div>
</div>

<style>
</style>
