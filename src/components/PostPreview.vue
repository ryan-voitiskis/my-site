<script setup lang="ts">
import { dateStringToLocale } from '@/lib/date'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { CollectionEntry } from 'astro:content'

const props = defineProps<{ post: CollectionEntry<'blog'>; index: number }>()
</script>

<template>
	<Button
		as-child
		variant="blank"
		class="group flex h-auto w-full flex-col gap-12 overflow-hidden rounded-none border-b p-0 py-12 text-md font-normal text-foreground hover:no-underline focus-visible:ring-4 sm:flex-row"
	>
		<a :href="`/blog/${props.post.slug}`">
			<img
				:src="post.data.image"
				:alt="post.data.image_alt"
				width="256"
				height="256"
				class="transition-hue-rotate-200 mx-auto h-64 w-64 rounded-full object-cover font-sans sepia transition duration-300 group-hover:sepia-0 group-focus:sepia-0"
			/>
			<div
				class="flex w-full flex-col items-start gap-4 lg:flex-row lg:!items-center lg:justify-items-start lg:gap-12"
			>
				<table
					class="clean mb-0 h-fit w-[260px] shrink-0 font-mono text-xs text-muted-foreground"
				>
					<tbody>
						<tr>
							<td>Type</td>
							<td class="font-thin">{{ post.data.format }}</td>
						</tr>
						<tr>
							<td>Published</td>
							<td class="font-thin">
								{{ dateStringToLocale(post.data.published) }}
							</td>
						</tr>
						<tr v-if="post.data.reading_time">
							<td>Reading time</td>
							<td class="font-thin">{{ post.data.reading_time }}</td>
						</tr>
					</tbody>
				</table>
				<div class="w-full font-sans">
					<h2
						class="mb-4 text-balance underline decoration-transparent transition duration-300 group-hover:decoration-heading-text group-focus:decoration-heading-text"
					>
						{{ post.data.title }}
					</h2>
					<div class="mb-2 flex flex-wrap gap-2">
						<Badge v-for="(tag, i) in post.data.tags" :key="i" :text="tag" />
					</div>
					<div v-if="post.data.short" class="w-full">
						{{ post.data.short }}
					</div>
				</div>
			</div>
		</a>
	</Button>
</template>
