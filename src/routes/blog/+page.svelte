<script lang="ts">
	import type { PageData } from './$types'

	export let data: PageData
</script>

<!--
	main is in page here, becase [slug] +page.svelte needs main without padding 
	for layout. padding inside [slug] articles is done per element.
-->
<main>
	<h1>blog</h1>

	<ul>
		{#each data.posts as post}
			<li>
				<h2>
					<a href={post.path}>
						{post.metadata.title}
					</a>
				</h2>
				Published {post.metadata.published}
				{#if post.metadata.updated} Updated {post.metadata.updated} {/if}
			</li>
		{/each}
	</ul>
</main>

<style lang="scss">
	main {
		padding: 0 10px;
		max-width: var(--page-width);
		margin: 0 auto;
	}
</style>
