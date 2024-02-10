<script setup lang="ts">
import PostPreview from '~/components/PostPreview.vue'
</script>

<template>
	<ContentList v-slot="{ list }" path="/blog">
		<main>
			<h1>Blog</h1>
			<div class="flex flex-end mb-8 gap-4">
				<button class="py-2 px-4 rounded-sm">Articles first</button>
				<button>Collections first</button>
			</div>
			<PostPreview v-for="post in list" :key="post._path" :post="post" />
		</main>
	</ContentList>
</template>

<style lang="scss">
.sorting-controls {
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
