<script lang="ts">
	import type { PageData } from './$types'
	import PostPreview from '$lib/components/PostPreview.svelte'
	import type Post from '$lib/types/PostData'

	export let data: PageData

	// sort articles or collections first
	function sortBy(type: 'article' | 'image_collection') {
		data.posts = data.posts.sort((a: Post, b: Post) => {
			if (a.metadata.format === type && b.metadata.format !== type) return -1
			if (a.metadata.format !== type && b.metadata.format === type) return 1
			return 0
		})
	}
</script>

<!--
	main is in +page.svelte here, because [slug] +page.svelte needs main without 
	padding for layout. padding inside [slug] articles is done per element.
-->
<main>
	<h1>Blog</h1>
	<div class="sorting-controls">
		<button on:click={() => sortBy('article')}>Articles first</button>
		<button on:click={() => sortBy('image_collection')}>Collections first</button>
	</div>
	{#each data.posts as post}
		<PostPreview {post} path={post.path} />
	{/each}
</main>

<style lang="scss">
	main {
		padding: 0 10px;
		max-width: var(--page-width);
		margin: 0 auto;
	}

	.sorting-controls {
		display: flex;
		justify-content: flex-end;
		margin-bottom: var(--standard-margin-bottom);
		gap: 10px;

		// move this to global if used more often
		button {
			padding: 5px 12px;
			border: none;
			border-radius: 5px;
			background: var(--alt-bg);
			color: var(--color-text);
			cursor: pointer;
			&:hover {
				background: var(--alt-alt-bg);
				color: var(--text-strong);
			}
		}
	}
</style>
