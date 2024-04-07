<script>
	import ItemInput from './ItemInput.svelte';
	import ListItem from './ListItem.svelte';
	import image from '$lib/images/davinci_1.png';
	import Icon from '@iconify/svelte';
	import { page } from '$app/stores';

	let activeTab = 0;
	const tabs = [{ title: 'Media' }, { title: 'Tab 2' }, { title: 'Tab 3' }];
	let collection = {
		books: [
			{ title: 'Book 1', vote_count: 12 },
			{ title: 'Book 2', vote_count: 32 },
			{ title: 'Book 3', vote_count: 20 }
		],
		podcasts: [
			{ title: 'Podcast 1', vote_count: 12 },
			{ title: 'Podcast 2', vote_count: 32 },
			{ title: 'Podcast 3', vote_count: 20 }
		],
		videos: [
			{ title: 'Video 1', vote_count: 12 },
			{ title: 'Video 2', vote_count: 32 },
			{ title: 'Video 3', vote_count: 20 }
		]
	};
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<div class="mt-10 flex flex-row">
		<img class="rounded-full h-36" src={image} alt="" />
		<div class="flex flex-col w-full ml-16">
			<h3 class="text-4xl font-bold">{$page.params.id}</h3>
			<div class="flex items-center">
				<Icon icon="material-symbols:link" style="font-size: 24px;" />
				<a href="#" class="ml-1 text-md text-blue-600">davinc.in{$page.url.pathname}</a>
			</div>
			<p class="mt-4">
				Hi! I'm Eric, a content creator known for engaging and quality content across blogs, social
				media, and more. Eager to bring your brand's story to life!
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
				{#each collection.books as book}
					<ListItem {...book}></ListItem>
				{/each}
				<ItemInput></ItemInput>
			</div>
		</div>

		<div class="my-10">
			<h4 class="mb-4 text-2xl font-bold">📻 Podcasts</h4>
			<div class="px-1 rounded-md shadow-sm">
				{#each collection.podcasts as podcast}
					<ListItem {...podcast}></ListItem>
				{/each}
				<ItemInput></ItemInput>
			</div>
		</div>

		<div class="my-10">
			<h4 class="mb-4 text-2xl font-bold">📹 Videos</h4>
			<div class="px-1 rounded-md shadow-sm">
				{#each collection.videos as video}
					<ListItem {...video}></ListItem>
				{/each}
				<ItemInput></ItemInput>
			</div>
		</div>
	</div>
</div>

<style>
	.tab-content > div {
		transition: height 0.3s ease-in-out;
	}
</style>
