<script>
	import Icon from '@iconify/svelte';
	/**
	 * @type {string}
	 */
	export let title;

	/**
	 * @type {number}
	 */
	export let vote_count;
</script>

<div class="flex items-center">
	<!-- <img src={image} alt="" class="w-16 h-16" /> -->
	<Icon icon="uim:image-v" class="w-16 h-16 text-gray-300" style="font-size: 24px;" />

	<h5 class="text-lg font-semibold ml-4 mr-auto">{title}</h5>

	<div class="flex items-center space-x-2">
		<div class="items-center rounded-full bg-gray-200 px-5 py-1 text-md font-semibold">
			{vote_count}
		</div>
		<button class="p-1 rounded-full border border-gray-200 hover:bg-gray-200"> 👍 </button>

		<button class="p-1 rounded-full border border-gray-200 hover:bg-gray-200"> 👎 </button>

		<button class="p-1 rounded-full border border-gray-200 hover:bg-gray-200">
			<Icon icon="ri:add-line" class="text-gray-300" style="font-size: 24px;" />
		</button>
	</div>
</div>

<style>
</style>
