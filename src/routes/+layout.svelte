<script lang="ts">
	import { page } from '$app/stores'
	import type { LayoutData } from './$types'
	import '$lib/styles/light-theme.scss'
	import '$lib/styles/dark-theme.scss'
	import '$lib/styles/dimensions.scss'
	import '$lib/styles/prism-one-dark.css'
	import '$lib/styles/global.scss'
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
<main>
	<slot />
</main>

<style lang="scss">
	main,
	header {
		max-width: var(--page-width);
		margin: 0 auto;
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
		gap: 20px;
		line-height: 28px;
		a {
			margin-right: 1rem;
			&.active {
				text-decoration: underline;
			}
		}
	}
</style>
