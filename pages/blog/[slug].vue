<script setup lang="ts">
const page = await queryContent('blog')
	.where({ _path: `/blog/${useRoute().params.slug}` })
	.findOne()

const url = `https://ryanvoitiskis.com${page._path}`
const imgUrl = `https://ryanvoitiskis.com${page.image}`
useHead({
	title: page.title,
	meta: [
		{ name: 'description', content: page.short },
		{ property: 'og:title', content: page.title },
		{ property: 'og:description', content: page.short },
		{ property: 'og:url', content: url },
		{ property: 'og:image', content: imgUrl },
		{ property: 'twitter:card', content: 'summary_large_image' },
		{ property: 'twitter:title', content: page.title },
		{ property: 'twitter:description', content: page.short },
		{ property: 'twitter:image', content: imgUrl }
	],
	link: [{ rel: 'canonical', href: url }]
})
</script>

<template>
	<main class="w-full">
		<ContentDoc>
			<template #default="{ doc }">
				<article
					v-if="doc"
					class="mx-auto w-full max-w-screen-sm px-4 pb-48 text-md"
					:class="{ '!max-w-[1120px]': doc.format === 'image_collection' }"
				>
					<h1 class="text-balance">{{ doc.title }}</h1>
					<table
						class="clean ml-2 border-l-4 border-l-secondary font-mono text-xs text-muted-foreground sm:ml-6"
					>
						<tbody>
							<tr v-if="doc.updated">
								<td class="!pl-4">Updated</td>
								<td class="font-[110]">
									{{ dateStringToLocale(doc.updated) }}
								</td>
							</tr>
							<tr>
								<td class="!pl-4">Published</td>
								<td class="font-[110]">
									{{ dateStringToLocale(doc.published) }}
								</td>
							</tr>
						</tbody>
					</table>
					<ContentRenderer :value="doc" />
				</article>
			</template>
		</ContentDoc>
	</main>
</template>
