<template>
	<main class="mx-auto w-full max-w-[820px] px-4 pb-48 font-serif">
		<ContentList v-slot="{ list }" path="/blog">
			<h1>Blog</h1>
			<div class="flex-end mb-8 flex gap-4">
				<button
					class="bg-bg-alt hover:bg-alt-bg-alt active:text-text-active rounded-md px-4 py-1 hover:text-text-strong active:bg-secondary"
				>
					Articles first
				</button>
				<button
					class="bg-bg-alt hover:bg-alt-bg-alt active:text-text-active rounded-md px-4 py-1 hover:text-text-strong active:bg-secondary"
				>
					Collections first
				</button>
			</div>
			<PostPreview v-for="post in list" :key="post._path" :post="post" />
		</ContentList>
	</main>
</template>
