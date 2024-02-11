<template>
	<main class="mx-auto w-full max-w-[820px] px-4 pb-48 font-serif">
		<ContentDoc>
			<!-- Default slot content wrapped in a template tag with v-slot:default -->
			<template #default="{ doc }">
				<article v-if="doc">
					<h1>{{ doc.title }}</h1>
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
