<script>
	import { page } from '$app/stores'
</script>

<main>
	<h1>{$page.status}</h1>
	{#if $page.error?.message === 'Not Found'}
		<h2>Sorry, the page you were looking for could not be found.</h2>
	{:else}
		<h2>Sorry, something went wrong.</h2>
	{/if}
	<img src="404.jpeg" alt="Computer glitch." />
</main>

<style lang="scss">
	main {
		padding: 0 10px 300px 10px;
		max-width: var(--page-width);
		margin: 0 auto;
	}
	h1 {
		font-family: var(--sans-serif-font);
		font-size: 2rem;
		margin-bottom: 1rem;
	}
	img {
		width: 100%;
	}
</style>
