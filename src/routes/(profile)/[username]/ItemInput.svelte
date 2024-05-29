<script>
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';

	/** @type {string} */
	export let mediaType;

	/** @type {import('./$types').ActionData} */
	export let form;
	onMount(() => {
		if ($page.form?.error && $page.form?.mediaType == mediaType) {
			alert($page.form.error);
			$page.form.error = '';
		}
	});
</script>

<div class="relative mt-2 rounded-md">
	<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-5">
		<Icon icon="ri:add-line" class="text-gray-700" style="font-size: 24px;" />
	</div>
	<form method="POST" action="?/add" use:enhance>
		<input type="hidden" name="profileId" value={$page.data.profile.id} />
		<input type="hidden" name="mediaType" value={mediaType} />
		<input
			type="text"
			name="item"
			id={'item-' + mediaType}
			value={form?.item ?? ''}
			autocomplete="off"
			required
			class="block h-14 w-full rounded-md border-0 py-1.5 pl-16 pr-20 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
			placeholder="add new material (e.g., https://davincin.vercel.app)"
		/>
	</form>
</div>

<style>
</style>
