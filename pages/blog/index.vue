<script setup lang="ts">
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
const format = ref(['article', 'image_collection'])

const query: QueryBuilderParams = computed(() => ({
	path: '/blog',
	where: [{ format: { $in: format.value } }],
	limit: 5
	// sort: [{ date: -1 }]
}))
</script>

<template>
	<main class="mx-auto w-full max-w-[820px] px-4 pb-48 font-serif">
		<h1>Blog {{ articles }}</h1>
		<div class="flex-end mb-8 flex gap-4">
			<ToggleGroup v-model="format" type="multiple">
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
