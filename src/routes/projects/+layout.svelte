<script lang="ts">
	import type { LayoutData } from './$types'

	export let data: LayoutData
</script>

<main>
	<slot />
</main>

<style lang="scss">
	main {
		padding: 0 10px;
		max-width: var(--page-width);
		margin: 0 auto;
	}
</style>
