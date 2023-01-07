<script lang="ts">
	import type { LayoutData } from './$types'

	export let data: LayoutData
</script>

<main>
	<slot />
</main>

<style lang="scss">
	main {
		max-width: var(--page-width);
		margin: 0 auto;
	}

	:global(article > pre) {
		box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
		border-radius: 5px;
	}

	:global(ol) {
		margin-left: calc(var(--horizontal-padding) + 20px);
	}

	:global(article ul) {
		margin-left: calc(var(--horizontal-padding) + 43px);
	}

	@media (min-width: 879px) {
		:global(article > pre) {
			margin-left: var(--horizontal-padding) !important;
			margin-right: var(--horizontal-padding) !important;
		}
	}
</style>
