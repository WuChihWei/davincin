<script>
	import ItemInput from './ItemInput.svelte';
	import ListItem from './ListItem.svelte';
	import image from '$lib/images/davinci_1.png';
	import Icon from '@iconify/svelte';
	import { page } from '$app/stores';
	import { MediaType } from '@prisma/client';

	let activeTab = 0;
	const tabs = [{ title: 'Media' }, { title: 'Tab 2' }, { title: 'Tab 3' }];

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column w-3/5">
	{#if data.profile}
		<div class="mt-10 flex flex-row">
			<img class="rounded-full h-36" src={data.profile.avatarUrl || image} alt="" />
			<div class="flex flex-col w-full ml-16">
				<h3 class="text-4xl font-bold">{data.profile.name}</h3>
				<div class="flex items-center">
					<Icon icon="material-symbols:link" style="font-size: 24px;" />
					<a href="#" class="ml-1 text-md text-blue-600">davinc.in/{$page.params.username}</a>
				</div>
				<p class="mt-4">
					{data.profile.bio}
				</p>
			</div>
		</div>
		<div class="mt-10 flex border-b border-gray-200">
			{#each tabs as tab, index}
				<button
					class="px-10 py-2 focus:outline-none"
					class:font-bold={index === activeTab}
					class:border-b-2={index === activeTab}
					class:border-black={index === activeTab}
					on:click={() => {
						activeTab = index;
					}}
				>
					{tab.title}
				</button>
			{/each}
		</div>

		<div class="tab-content overflow-hidden">
			<!-- {#each tabs as tab, index}
			<div class={index === activeTab ? 'block' : 'hidden'}>
				{tab.content}
			</div>
		{/each} -->
			<div class="my-10">
				<h4 class="mb-4 text-2xl font-bold">📖 Books</h4>
				<div class="px-1 rounded-md shadow-sm">
					{#each data.profile.collection.books as book}
						<ListItem
							id={book.id}
							title={book.title}
							voteCount={book.voteCount}
							url={book.originalUrl}
						></ListItem>
					{/each}
					<ItemInput mediaType={MediaType.BOOK}></ItemInput>
				</div>
			</div>

			<div class="my-10">
				<h4 class="mb-4 text-2xl font-bold">📻 Podcasts</h4>
				<div class="px-1 rounded-md shadow-sm">
					{#each data.profile.collection.podcasts as podcast}
						<ListItem
							id={podcast.id}
							title={podcast.title}
							voteCount={podcast.voteCount}
							url={podcast.originalUrl}
						></ListItem>
					{/each}
					<ItemInput mediaType={MediaType.PODCAST}></ItemInput>
				</div>
			</div>

			<div class="my-10">
				<h4 class="mb-4 text-2xl font-bold">📹 Videos</h4>
				<div class="px-1 rounded-md shadow-sm">
					{#each data.profile.collection.videos as video}
						<ListItem
							id={video.id}
							title={video.title}
							voteCount={video.voteCount}
							url={video.originalUrl}
						></ListItem>
					{/each}
					<ItemInput mediaType={MediaType.VIDEO}></ItemInput>
				</div>
			</div>
		</div>
	{/if}
</div>

<style>
	.tab-content > div {
		transition: height 0.3s ease-in-out;
	}
</style>
