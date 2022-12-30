<script lang="ts">
	import type Post from '$lib/types/Post'
	import type Image from '$lib/types/Image'

	export let post: Post
	export let path: string

	const options: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	}

	const image = post.metadata.image ? post.metadata.image : ''
	const imageAlt = post.metadata.image_alt ? post.metadata.image_alt : post.metadata.title
	const published = new Date(post.metadata.published).toLocaleDateString(undefined, options)
</script>

<a href={path} class="title">
	<article class="post-preview">
		<div class="post-preview-image">
			{#if image}
				<img src={image} alt={imageAlt} />
			{/if}
		</div>
		<div class="post-preview-content">
			<h2>{post.metadata.title}</h2>
			<div class="published">Posted on {published}</div>
			{#if post.metadata.short}
				<div class="short">{post.metadata.short}</div>
			{/if}
		</div>
	</article>
</a>

<style lang="scss">
	a {
		text-decoration: none;
		&:hover {
			color: unset;
		}
	}
	article.post-preview {
		display: grid;
		grid-template-columns: minmax(200px, 1fr) 2fr;
		column-gap: 30px;
		margin-bottom: 40px;
		height: 180px;
		.post-preview-image {
			grid-column: 1 / 2;
			img {
				width: 100%;
				height: 100%;
				max-height: 180px;
				object-fit: cover;
			}
		}
		.post-preview-content {
			grid-column: 2 / 3;
			h2 {
				font-size: 1.2rem;
				line-height: 36px;
				margin: 6px 0;
			}
			.published {
				grid-area: 2 / 2 / 3 / 3;
				font-size: 0.7em;
				margin-bottom: 6px;
				color: var(--text-soft);
				font-family: var(--sans-serif-font);
			}
			.short {
				grid-area: 3 / 2 / 4 / 3;
				font-size: 0.9em;
				text-overflow: ellipsis;
				overflow: hidden;
				display: -webkit-box;
				object-fit: cover;
				-webkit-line-clamp: 3;
				-webkit-box-orient: vertical;
				overflow: hidden;
			}
		}
		&:hover {
			background-color: var(--alt-bg);
		}
	}

	@media (max-width: 520px) {
		article.post-preview {
			height: unset;
			background-color: var(--alt-bg);
			grid-template-columns: 1fr;
			.post-preview-image {
				grid-column: 1 / 2;
			}
			.post-preview-image {
				background-color: var(--alt-alt-bg);
				display: flex;
				grid-column: 1 / 2;
				justify-content: space-around;
				img {
					width: unset;
					max-width: 100%;
					object-fit: unset;
				}
			}
			.post-preview-content {
				padding: 20px;
				grid-column: 1 / 2;
				.published {
					grid-area: 2 / 1 / 3 / 2;
					font-size: 0.8em;
					margin-bottom: 10px;
				}
				.short {
					grid-area: 3 / 1 / 4 / 2;
					font-size: 0.9em;
					text-overflow: ellipsis;
					overflow: hidden;
					display: -webkit-box;
					object-fit: cover;
					-webkit-line-clamp: 3;
					-webkit-box-orient: vertical;
					overflow: hidden;
				}
			}
		}
	}
</style>
