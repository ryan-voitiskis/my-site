<script lang="ts">
	import type { LayoutData } from './$types'
	import '../css/light-theme.scss'
	import '../css/dark-theme.scss'
	import '../css/global.scss'
	import ThemeToggle from '../components/ThemeToggle.svelte'

	export let data: LayoutData
</script>

<header>
	<nav>
		<a href="/">about</a>
		<a href="/blog">blog</a>
		<a href="/projects">projects</a>
	</nav>
	<ThemeToggle />
</header>
<slot />

<style lang="scss">
	header {
		max-width: 820px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20px 10px;
	}

	nav {
		display: flex;
		gap: 20px;
		line-height: 28px;
		a {
			margin-right: 1rem;
		}
	}

	body {
		background-color: var(--page-bg);
	}
</style>
