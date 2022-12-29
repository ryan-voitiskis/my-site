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

	@media (min-width: 879px) {
		:global(article > pre) {
			margin-left: var(--horizontal-padding) !important;
			margin-right: var(--horizontal-padding) !important;
		}
	}
</style>
