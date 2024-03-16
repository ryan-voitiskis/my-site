<template>
	<main class="w-full">
		<ContentDoc>
			<!-- Default slot content wrapped in a template tag with v-slot:default -->
			<template #default="{ doc }">
				<article
					v-if="doc"
					class="mx-auto w-full max-w-screen-sm px-4 pb-48 font-serif"
					:class="{ '!max-w-screen-xl': doc.format === 'image_collection' }"
				>
					<h1 class="text-balance">{{ doc.title }}</h1>
					<table
						class="clean ml-2 border-l-4 border-l-secondary font-mono text-xs text-muted-foreground sm:ml-6"
					>
						<tbody>
							<tr>
								<td class="!pl-4">Published</td>
								<td class="font-thin">
									{{ dateStringToLocale(doc.published) }}
								</td>
							</tr>
							<tr v-if="doc.updated">
								<td class="!pl-4">Updated</td>
								<td class="font-thin">
									{{ dateStringToLocale(doc.updated) }}
								</td>
							</tr>
						</tbody>
					</table>
					<ContentRenderer :value="doc" />
				</article>
			</template>

			<!-- Named slot for "not found" message -->
			<template #not-found>
				<h1>Document not found</h1>
				<!-- TODO: some content here, like here are some similar pages to x -->
			</template>
		</ContentDoc>
	</main>
</template>
