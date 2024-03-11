<script setup lang="ts">
defineProps<{ post: Post }>()
</script>

<template>
	<Button
		as-child
		variant="blank"
		class="h-auto w-full justify-start overflow-hidden rounded-xl bg-white/50 p-0 shadow-md hover:bg-white/80 hover:no-underline focus-visible:ring-4"
	>
		<a :href="post._path">
			<article class="flex w-full">
				<img
					v-if="post.image"
					:src="post.image"
					:alt="post.image_alt"
					class="h-full max-h-64 w-64 max-w-64 object-cover"
				/>
				<div class="w-full p-4">
					<h2>{{ post.title }}</h2>
					<div class="mb-2 font-sans text-sm font-light text-muted-foreground">
						Published on {{ dateStringToLocale(post.published) }}
					</div>
					<div v-if="post.short" class="w-full text-md text-foreground">
						{{ post.short }}
					</div>
				</div>
			</article>
		</a>
	</Button>
</template>
