<script setup lang="ts">
import ThemeToggle from '~/components/ThemeToggle.vue'
</script>

<template>
	<div class="max-w-[820px] mx-auto">
		<header class="flex justify-between w-full">
			<nav class="flex flex-wrap gap-4">
				<NuxtLink to="/">about</NuxtLink>
				<NuxtLink to="/blog">blog</NuxtLink>
				<NuxtLink to="/projects">projects</NuxtLink>
			</nav>
			<ThemeToggle />
		</header>

		<main>
			<slot />
		</main>
	</div>
</template>
