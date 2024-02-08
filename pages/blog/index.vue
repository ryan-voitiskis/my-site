<script setup lang="ts">
import PostPreview from '~/components/PostPreview.vue'
</script>

<template>
	<ContentList v-slot="{ list }" path="/blog">
		<main>
			<h1>Blog</h1>
			<div class="sorting-controls">
				<button>Articles first</button>
				<button>Collections first</button>
			</div>
			<PostPreview v-for="post in list" :key="post._path" :post="post" />
		</main>
	</ContentList>
</template>

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
		&.active {
			background: var(--secondary);
			color: var(--button-active-text);
		}
	}
}
</style>
