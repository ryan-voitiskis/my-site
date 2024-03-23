<script setup lang="ts">
defineProps<{ post: Post }>()
</script>

<template>
	<Button
		as-child
		variant="blank"
		class="group mx-auto grid h-auto w-full grid-cols-1 gap-8 overflow-hidden rounded-none border-b p-0 py-12 text-md font-normal text-foreground hover:no-underline focus-visible:ring-4 sm:grid-cols-[256px_288px_minmax(256px,512px)]"
	>
		<a :href="post._path">
			<img
				:src="post.image"
				:alt="post.image_alt"
				class="transition-hue-rotate-200 mx-auto h-full max-h-64 w-64 max-w-64 rounded-full object-cover sepia transition duration-300 group-hover:sepia-0 group-focus:sepia-0"
			/>
			<table class="clean mx-auto mb-0 font-mono text-xs text-muted-foreground">
				<tbody>
					<tr>
						<td class="!pl-4">Published</td>
						<td class="font-thin">
							{{ dateStringToLocale(post.published) }}
						</td>
					</tr>
					<tr>
						<td class="!pl-4">Reading time</td>
						<td class="font-thin">10 mins</td>
					</tr>
				</tbody>
			</table>
			<div class="w-full font-sans">
				<h2
					class="text-balance underline decoration-transparent transition duration-300 group-hover:decoration-heading-text group-focus:decoration-heading-text"
				>
					{{ post.title }}
				</h2>
				<div class="flex text-orange-400">badge badge badge</div>
				<div v-if="post.short" class="w-full">
					{{ post.short }}
				</div>
			</div>
		</a>
	</Button>
</template>
