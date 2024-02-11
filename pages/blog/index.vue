<script setup lang="ts">
import PostPreview from '~/components/PostPreview.vue'
</script>

<template>
	<ContentList v-slot="{ list }" path="/blog">
		<main>
			<h1>Blog</h1>
			<div class="flex-end mb-8 flex gap-4">
				<button
					class="rounded-md bg-alt-bg px-4 py-1 hover:bg-alt-alt-bg hover:text-text-strong active:bg-secondary active:text-button-active-text"
				>
					Articles first
				</button>
				<button
					class="rounded-md bg-alt-bg px-4 py-1 hover:bg-alt-alt-bg hover:text-text-strong active:bg-secondary active:text-button-active-text"
				>
					Collections first
				</button>
			</div>
			<PostPreview v-for="post in list" :key="post._path" :post="post" />
		</main>
	</ContentList>
</template>
