<script lang="ts">
	import type { PageData } from './$types'

	export let data: PageData

	const options: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	}
	const date = new Date(data.date)
	const dateFormatted = date.toLocaleDateString(undefined, options)
</script>

<article>
	<h1>{data.title}</h1>
	<p>Published: {dateFormatted}</p>
	<svelte:component this={data.content} />
</article>

<style lang="scss">
	:global(article > pre) {
		box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
		border-radius: 5px;
	}

	@media (min-width: 879px) {
		:global(article > pre) {
			margin-left: var(--horizontal-padding) !important;
			margin-right: var(--horizontal-padding) !important;
		}
	} ;
</style>
