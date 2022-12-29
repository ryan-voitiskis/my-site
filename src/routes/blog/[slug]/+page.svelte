<script lang="ts">
	import type { PageData } from './$types'

	export let data: PageData

	const options: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	}
	const published = new Date(data.published).toLocaleDateString(undefined, options)
	const updated = data.updated ? new Date(data.updated).toLocaleDateString(undefined, options) : ''
</script>

<article>
	<h1>{data.title}</h1>

	<table class="clean">
		<tr>
			<td>Published</td>
			<td>{published}</td>
		</tr>
		{#if updated}
			<tr>
				<td>Updated</td>
				<td>{updated}</td>
			</tr>
		{/if}
	</table>

	<svelte:component this={data.content} />
</article>

<style lang="scss">
	table {
		border-left: 4px solid var(--secondary) !important;
		margin: 0 0 40px calc(var(--horizontal-padding) + 20px);
		font-size: 1rem;
		font-family: var(--sans-serif-font);
		color: var(--text-soft);
		tr {
			td:first-of-type {
				font-weight: bold;
				padding-left: 20px;
			}
		}
	}
</style>
