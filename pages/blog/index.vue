<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
import { ToggleGroup, ToggleGroupItem } from '~/components/ui/toggle-group'
const format = ref(['article', 'image_collection'])

const query: QueryBuilderParams = computed(() => ({
	path: '/blog',
	where: [{ format: { $in: format.value } }]
	// limit: 1
	// sort: [{ date: -1 }]
}))
</script>

<template>
	<main class="font-serif">
		<div class="mx-auto w-full max-w-screen-xl px-4">
			<h1 class="font-mono text-sm font-[120] text-muted-foreground">> blog</h1>
		</div>
		<div class="mx-auto w-full max-w-[820px] px-4 pb-48">
			<div class="flex-end mb-8 flex justify-end gap-4">
				<ToggleGroup v-model="format" type="multiple" :roving-focus="false">
					<ToggleGroupItem value="article" size="badge">
						Articles
					</ToggleGroupItem>
					<ToggleGroupItem value="image_collection" size="badge">
						Collections
					</ToggleGroupItem>
				</ToggleGroup>
			</div>
			<ContentList :query="query" path="/blog">
				<template #default="{ list }">
					<div class="flex flex-col gap-8">
						<PostPreview v-for="post in list" :key="post._path" :post="post" />
					</div>
				</template>
				<template #not-found>
					<IconNullSymbol class="mx-auto my-8 h-8 w-8 text-heading-text/40" />
				</template>
			</ContentList>
		</div>
	</main>
</template>
