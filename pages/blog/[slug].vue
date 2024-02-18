<template>
	<main class="mx-auto w-full max-w-[640px] px-4 pb-48 font-serif">
		<ContentDoc>
			<!-- Default slot content wrapped in a template tag with v-slot:default -->
			<template #default="{ doc }">
				<article v-if="doc">
					<h1>{{ doc.title }}</h1>
					<table
						class="clean ml-2 border-l-4 border-l-secondary font-sans text-sm text-text-soft sm:ml-6"
					>
						<tbody>
							<tr>
								<td class="!pl-4 font-medium">Published</td>
								<td class="font-light">
									{{ yyyyMmDdToLocale(doc.published) }}
								</td>
							</tr>
							<tr v-if="doc.updated">
								<td class="!pl-4 font-medium">Updated</td>
								<td class="font-light">{{ yyyyMmDdToLocale(doc.updated) }}</td>
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
