<script lang="ts">
	import type { PageData } from './$types';
	import DataTable from './data-table.svelte';
	import * as Dialog from '$lib/components/ui/dialog';
	import Button from '$lib/components/ui/button/button.svelte';

	export let data: PageData;
	$: rows = data.list as SuratMasuk[];
</script>

<h2 class="my-6 text-2xl font-semibold text-gray-700">Surat Masuk</h2>
<Dialog.Root>
	<Dialog.Trigger class="mb-2 max-w-fit">
		<Button class="bg-white hover:bg-gray-200 text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5 mr-1 self-center align-middle">
                <path
                    fill-rule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
                    clip-rule="evenodd"
                />
            </svg>
            Buat Nomor Surat
        </Button>
	</Dialog.Trigger>
	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title>Are you sure absolutely sure?</Dialog.Title>
			<Dialog.Description>
				This action cannot be undone. This will permanently delete your account and remove your data
				from our servers.
			</Dialog.Description>
		</Dialog.Header>
	</Dialog.Content>
</Dialog.Root>
<DataTable data={rows} />
