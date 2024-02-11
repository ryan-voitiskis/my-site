<script setup lang="ts">
import PostPreview from '~/components/PostPreview.vue'
</script>

<template>
	<ContentList v-slot="{ list }" path="/blog">
		<main>
			<h1>Blog</h1>
			<div class="flex flex-end mb-8 gap-4">
				<button
					class="py-1 px-4 rounded-md bg-alt-bg hover:bg-alt-alt-bg hover:text-text-strong active:bg-secondary active:text-button-active-text"
				>
					Articles first
				</button>
				<button
					class="py-1 px-4 rounded-md bg-alt-bg hover:bg-alt-alt-bg hover:text-text-strong active:bg-secondary active:text-button-active-text"
				>
					Collections first
				</button>
			</div>
			<PostPreview v-for="post in list" :key="post._path" :post="post" />
		</main>
	</ContentList>
</template>
