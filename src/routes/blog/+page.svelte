<script lang="ts">
	import type { PageData } from './$types'
	import PostPreview from '$lib/components/PostPreview.svelte'

	export let data: PageData
</script>

<!--
	main is in +page.svelte here, because [slug] +page.svelte needs main without 
	padding for layout. padding inside [slug] articles is done per element.
-->
<main>
	<h1>Blog</h1>
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
</style>
