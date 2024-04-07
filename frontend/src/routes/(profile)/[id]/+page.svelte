<script>
	import image from '$lib/images/davinci_1.png';
	import Icon from '@iconify/svelte';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let activeTab = 0;
	const tabs = [
		{ title: 'Media', content: 'Content of Tab 1' },
		{ title: 'Tab 2', content: 'Content of Tab 2' },
		{ title: 'Tab 3', content: 'Content of Tab 3' }
	];
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<div class="flex flex-row">
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
		{#each tabs as tab, index}
			<div class={index === activeTab ? 'block' : 'hidden'}>
				{tab.content}
			</div>
		{/each}
	</div>
</div>

<style>
	.tab-content > div {
		transition: height 0.3s ease-in-out;
	}
</style>
