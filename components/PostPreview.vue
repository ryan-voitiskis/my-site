<script setup lang="ts">
import type { Post } from 'types/types'
import NewspaperIcon from '~/components/icon/NewspaperIcon.vue'
import ImageIcon from '~/components/icon/ImageIcon.vue'

const props = defineProps<{
	post: Post
}>()

// TODO: clean this up
const published = computed(() => {
	const options: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	}
	return new Date(props.post.published).toLocaleDateString(undefined, options)
})
</script>

<template>
	<a :href="post._path" class="title">
		<article class="post-preview">
			<div v-if="post.image" class="post-preview-image">
				<img :src="post.image" :alt="post.image_alt" />
			</div>
			<div class="post-preview-content">
				<h2>
					<NewspaperIcon v-if="post.format === 'article'" />
					<ImageIcon v-if="post.format === 'image_collection'" />
					{{ post.title }}
				</h2>
				<div class="published">Posted on {{ published }}</div>
				<div v-if="post.short" class="short">
					{{ post.short }}
				</div>
			</div>
		</article>
	</a>
</template>

<style scoped lang="scss">
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
