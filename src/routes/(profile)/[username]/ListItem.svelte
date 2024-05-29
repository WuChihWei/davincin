<script>
	import Icon from '@iconify/svelte';
	/**
	 * @type {string}
	 */
	export let id;
	/**
	 * @type {string}
	 */
	export let title;

	/**
	 * @type {number}
	 */
	export let voteCount;

	/**
	 * @type {string}
	 */
	export let url;
</script>

<div class="flex items-center">
	<!-- <img src={image} alt="" class="w-16 h-16" /> -->
	<Icon icon="uim:image-v" class="w-16 h-16 text-gray-300" style="font-size: 24px;" />

	<a href={url} class="text-lg font-semibold ml-4 mr-auto">{title}</a>

	<div class="flex items-center space-x-2">
		<div class="items-center rounded-full bg-gray-200 ml-6 px-5 py-1 text-md font-semibold">
			{voteCount}
		</div>
		<form method="POST">
			<input type="hidden" name="itemId" value={id} />
			<button formaction="?/up" class="p-1 rounded-full border border-gray-200 hover:bg-gray-200">
				👍
			</button>
			<button formaction="?/down" class="p-1 rounded-full border border-gray-200 hover:bg-gray-200">
				👎
			</button>
			<button formaction="?/save" class="p-1 rounded-full border border-gray-200 hover:bg-gray-200">
				<Icon icon="ri:add-line" class="text-gray-300" style="font-size: 24px;" />
			</button>
		</form>
	</div>
</div>

<style>
</style>
