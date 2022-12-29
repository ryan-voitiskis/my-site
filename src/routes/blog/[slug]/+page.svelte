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
	:global(article > pre) {
		box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
		border-radius: 5px;
	}

	:global(article .side-note) {
		width: 100%;
		font-style: italic;
		font-size: 1.3rem;
		background: var(--side-note-bg);
		color: var(--side-note-text);
		padding: 34px 44px;
		margin: 40px 0;
		margin-left: var(--horizontal-padding);
		margin-right: var(--horizontal-padding);
	}

	:global(ol) {
		margin-left: calc(var(--horizontal-padding) + 20px);
	}

	:global(article ul) {
		margin-left: calc(var(--horizontal-padding) + 43px);
	}

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

	@media (min-width: 879px) {
		:global(article > pre) {
			margin-left: var(--horizontal-padding) !important;
			margin-right: var(--horizontal-padding) !important;
		}
	} ;
</style>
