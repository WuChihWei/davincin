<script>
	import CollectionCard from './CollectionCard.svelte';
	import { collections } from '$lib/stores/collection.js';
</script>

<svelte:head>
	<title>Davincin</title>
	<meta name="description" content="Davincin Education App" />
</svelte:head>

<section>
	<h1 class="mt-10 text-6xl text-blue-600 font-bold leading-tight">
		Found out what knowledge would historical figures seek today?
	</h1>
	<h2 class="text-4xl text-black font-bold mt-6">Vote or build their learning profiles</h2>
</section>

<section>
	<div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
		<div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
			{#each $collections as collection}
				<CollectionCard {collection} />
			{/each}
		</div>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
