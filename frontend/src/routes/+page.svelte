<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>Davincin</title>
	<meta name="description" content="da Vinci to nth power" />
</svelte:head>

<section>
	<h1 class="text-6xl text-blue-600 font-bold leading-tight">
		Found out what knowledge would historical figures seek today?
	</h1>
	<h2 class="text-4xl text-black font-bold mt-6">
		Vote or build their learning profiles
	</h2>
</section>

<section>
	<Counter />
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
