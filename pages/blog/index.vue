<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
import { ToggleGroup, ToggleGroupItem } from '~/components/ui/toggle-group'
const format = ref(['article', 'image_collection'])

const query: QueryBuilderParams = computed(() => ({
	path: '/blog',
	where: [{ format: { $in: format.value } }]
	// sort: [{ date: -1 }]
}))
</script>

<template>
	<main class="mx-auto w-full max-w-[820px] px-4 pb-48 font-serif">
		<h1>Blog</h1>
		<div class="flex-end mb-8 flex justify-end gap-4">
			<ToggleGroup v-model="format" type="multiple" :roving-focus="false">
				<ToggleGroupItem value="article">Articles</ToggleGroupItem>
				<ToggleGroupItem value="image_collection">Collections</ToggleGroupItem>
			</ToggleGroup>
		</div>
		<ContentList :query="query" path="/blog">
			<template #default="{ list }">
				<PostPreview v-for="post in list" :key="post._path" :post="post" />
			</template>
			<template #not-found>
				<p>No articles found.</p>
			</template>
		</ContentList>
	</main>
</template>
