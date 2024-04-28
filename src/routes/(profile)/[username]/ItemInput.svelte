<script>
	import Icon from '@iconify/svelte';
</script>

<div class="relative mt-2 rounded-md">
	<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-5">
		<Icon icon="ri:add-line" class="text-gray-700" style="font-size: 24px;" />
	</div>
	<input
		type="text"
		name="item"
		class="block h-14 w-full rounded-md border-0 py-1.5 pl-16 pr-20 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
		placeholder="add new material"
	/>
</div>

<style>
</style>
