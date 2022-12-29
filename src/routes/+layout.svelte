<script lang="ts">
	import { page } from '$app/stores'
	import type { LayoutData } from './$types'

	// styles
	import '$lib/styles/light-theme.scss'
	import '$lib/styles/dark-theme.scss'
	import '$lib/styles/dimensions.scss'
	import '$lib/styles/prism-custom.scss'
	import '$lib/styles/global.scss'

	// fonts - (css vars are set in style below)
	import '@fontsource/urbanist' // sans-serif
	import '@fontsource/crimson-pro' // serif
	import '@fontsource/source-code-pro' // monospace
	import '@fontsource/space-mono' // nav

	// components
	import ThemeToggle from '$lib/components/ThemeToggle.svelte'

	export let data: LayoutData
</script>

<header>
	<nav>
		<a href="/" class:active={$page.route.id === '/'}>about</a>
		<a href="/blog" class:active={$page.route.id === '/blog'}>blog</a>
		<a href="/projects" class:active={$page.route.id === '/projects'}>projects</a>
	</nav>
	<ThemeToggle />
</header>
<slot />

<style lang="scss">
	:global(:root) {
		--sans-serif-font: 'Urbanist', sans-serif;
		--serif-font: 'Crimson Pro', serif;
		--monospace-font: 'Source Code Pro', monospace;
		--nav-font: 'Space Mono', monospace;
	}

	header {
		max-width: var(--page-width);
		margin: 0 auto;
	}

	h1 {
		font-family: Urbanist, sans-serif;
	}

	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20px var(--horizontal-padding);
	}

	body {
		background-color: var(--page-bg);
	}

	main {
		padding-bottom: 100px;
	}

	nav {
		display: flex;
		font-family: var(--nav-font);
		gap: 20px;
		line-height: 28px;
		a {
			color: var(--nav-text);
			margin-right: 1rem;
			text-decoration: none;
			&:hover {
				color: var(--nav-text-hover);
			}
			&.active {
				text-decoration: underline;
				text-decoration-color: var(--nav-underline);
				text-decoration-thickness: 0.1rem;
			}
		}
	}
</style>
