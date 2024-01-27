<script lang="ts">
	import type { LayoutData } from './$types'

	export let data: LayoutData
</script>

<main>
	<slot />
</main>

<style lang="scss">
	main {
		max-width: 1400px;
		margin: 0 auto;
	}
</style>
