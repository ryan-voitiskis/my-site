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
</style>
