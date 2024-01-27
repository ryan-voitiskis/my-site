<script lang="ts">
	import type PostData from '$lib/types/PostData'
	import NewspaperIcon from './icons/NewspaperIcon.svelte'
	import ImageIcon from './icons/ImageIcon.svelte'

	export let post: PostData
	export let path: string

	const options: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	}

	$: image = post.metadata.image ? post.metadata.image : ''
	$: imageAlt = post.metadata.image_alt ? post.metadata.image_alt : post.metadata.title
	$: published = new Date(post.metadata.published).toLocaleDateString(undefined, options)
</script>

<a href={path} class="title">
	<article class="post-preview">
		<div class="post-preview-image">
			{#if image}
				<img src={image} alt={imageAlt} />
			{/if}
		</div>
		<div class="post-preview-content">
			<h2>
				{#if post.metadata.format === 'article'}
					<NewspaperIcon />
				{:else if post.metadata.format === 'image_collection'}
					<ImageIcon />
				{/if}
				{post.metadata.title}
			</h2>
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
		grid-template-rows: 1fr;
		column-gap: 30px;
		margin-bottom: 40px;
		.post-preview-image {
			grid-column: 1 / 2;
			img {
				width: 100%;
				height: 100%;
				max-height: 180px;
				object-fit: cover;
				margin: 0;
				float: left;
			}
		}
		.post-preview-content {
			grid-column: 2 / 3;
			h2 {
				display: inline-flex;
				font-size: 1.2rem;
				line-height: 36px;
				margin: 6px 0;
				:global(svg) {
					flex-shrink: 0;
					align-self: center;
					width: 1.2em;
					height: 1.2em;
					margin-right: 14px;
				}
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
			}
		}
		&:hover {
			background-color: var(--alt-bg);
		}
	}

	@media (max-width: 600px) {
		article.post-preview {
			column-gap: 10px;
			.post-preview-content {
				h2 {
					line-height: 26px;
					:global(svg) {
						margin-right: 10px;
					}
				}
				.short {
					font-size: 1.1rem;
				}
			}
		}
	}

	@media (max-width: 520px) {
		article.post-preview {
			grid-template-columns: 160px 2fr;
			.post-preview-image {
				img {
					max-width: 160px;
				}
			}
			.post-preview-content {
				.published {
					font-size: 0.7rem;
				}
				.short {
					font-size: 1rem;
				}
			}
		}
	}

	@media (max-width: 460px) {
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
				}
			}
		}
	}
</style>
