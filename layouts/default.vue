<script setup lang="ts">
import ThemeToggle from '~/components/ThemeToggle.vue'
</script>

<template>
	<div>
		<header class="mx-auto flex w-full max-w-[820px] justify-between p-4">
			<nav class="main-nav flex flex-wrap font-mono text-nav-text">
				<NuxtLink to="/">about</NuxtLink>
				<NuxtLink to="/blog">blog</NuxtLink>
				<NuxtLink to="/projects">projects</NuxtLink>
			</nav>
			<ThemeToggle />
		</header>

		<!-- root node of slot should be <main> -->
		<slot />
	</div>
</template>

<style lang="scss">
nav.main-nav {
	a {
		padding: 16px;
		margin: -16px 0;
		text-decoration: none;
		text-decoration-thickness: 0.1rem !important;
		&:hover {
			text-decoration: underline;
		}
		&.router-link-active {
			text-decoration: underline;
			text-decoration-color: var(--nav-underline);
		}
		&:first-child {
			margin-left: -16px;
		}
	}
}
</style>
