<script lang="ts">
	import { readable } from 'svelte/store';
	import { formattedValue } from '$lib/utils';
	import * as Table from '$lib/components/ui/table';
	import { createTable, Render, Subscribe } from 'svelte-headless-table';

	export let data: SuratMasuk[];
	const table = createTable(readable(data));

	const columns = table.createColumns([
		table.column({
			accessor: 'nomorSurat',
			header: 'Nomor Surat'
		}),
		table.column({
			accessor: 'nomorTanggalSurat',
			header: 'Nomor Tanggal Surat'
		}),
		table.column({
			accessor: 'tanggal',
			header: 'Tanggal',
			cell: ({ value }) => {
				return formattedValue(BigInt(value));
			}
		}),
		table.column({
			accessor: 'namaPenerima',
			header: 'Nama Penerima'
		}),
		table.column({
			accessor: 'namaPengirim',
			header: 'Nama Pengirim'
		}),
		table.column({
			accessor: 'isi',
			header: 'Isi Surat'
		})
	]);

	const { headerRows, pageRows, tableAttrs, tableBodyAttrs } = table.createViewModel(columns);
</script>

<div class="bg-white rounded-md w-full overflow-x-auto mb-4">
	<Table.Root {...$tableAttrs}>
		<Table.Header>
			{#each $headerRows as headerRow}
				<Subscribe rowAttrs={headerRow.attrs()}>
					<Table.Row>
						{#each headerRow.cells as cell (cell.id)}
							<Subscribe attrs={cell.attrs()} let:attrs props={cell.props()}>
								<Table.Head {...attrs}>
									{#if ['nomorSurat', 'nomorTanggalSurat', 'tanggal'].includes(cell.id)}
										<div class="text-center">
											<Render of={cell.render()} />
										</div>
									<!-- {:else if cell.id === 'status'} -->
									{:else}
										<Render of={cell.render()} />
									{/if}
								</Table.Head>
							</Subscribe>
						{/each}
					</Table.Row>
				</Subscribe>
			{/each}
		</Table.Header>
		<Table.Body {...$tableBodyAttrs}>
			{#each $pageRows as row (row.id)}
				<Subscribe rowAttrs={row.attrs()} let:rowAttrs>
					<Table.Row {...rowAttrs}>
						{#each row.cells as cell (cell.id)}
							<Subscribe attrs={cell.attrs()} let:attrs>
								<Table.Cell class="font-medium min-w-[150px]" {...attrs}>
									{#if cell.id === 'nomorSurat'}
										<div class="text-center">
											<Render of={cell.render()} />
										</div>
									<!-- {:else if cell.id === 'status'} -->
									{:else}
										<Render of={cell.render()} />
									{/if}
								</Table.Cell>
							</Subscribe>
						{/each}
					</Table.Row>
				</Subscribe>
			{/each}
		</Table.Body>
	</Table.Root>
</div>
