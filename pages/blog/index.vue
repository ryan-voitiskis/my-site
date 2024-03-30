<script setup lang="ts">
import { ToggleGroup, ToggleGroupItem } from '~/components/ui/toggle-group'
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

const description =
	'my blog posts about software development and how I utilise AI in my projects.'
const title = 'ryan voitiskis - blog'
const url = 'https://ryanvoitiskis.com/blog'
useHead({
	title: title,
	meta: [
		{ name: 'description', content: description },
		{ property: 'og:title', content: title },
		{ property: 'og:description', content: description },
		{ property: 'og:url', content: url },
		{ property: 'twitter:card', content: 'summary' },
		{ property: 'twitter:title', content: title },
		{ property: 'twitter:description', content: description }
	],
	link: [{ rel: 'canonical', href: url }]
})

const format = ref(['article', 'image_collection'])
const query: QueryBuilderParams = computed(() => ({
	path: '/blog',
	where: [{ format: { $in: format.value } }],
	sort: [{ published: -1 }]
}))
</script>

<template>
	<main>
		<div class="mx-auto w-full max-w-[1120px] px-4 pb-48">
			<h1 class="font-mono text-sm font-[120] text-muted-foreground">> blog</h1>
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
					<div class="flex flex-col">
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
