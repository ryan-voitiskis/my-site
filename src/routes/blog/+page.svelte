<script lang="ts">
	import type { PageData } from './$types'

	export let data: PageData
</script>

<h1>blog</h1>

<ul>
	{#each data.posts as post}
		<li>
			<h2>
				<a href={post.path}>
					{post.metadata.title}
				</a>
			</h2>
			Published {post.metadata.date}
		</li>
	{/each}
</ul>
