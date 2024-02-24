<template>
	<div>
		<header class="bg-bg-alt mb-6 flex w-full justify-between">
			<div
				class="mx-auto flex w-full max-w-[1280px] flex-row justify-between p-4"
			>
				<nav class="main-nav -ml-4 gap-y-4 font-mono text-[17px] text-nav-text">
					<NuxtLink to="/">about</NuxtLink>
					<NuxtLink to="/blog">blog</NuxtLink>
					<NuxtLink to="/projects">projects</NuxtLink>
				</nav>
				<ThemeToggle />
			</div>
		</header>

		<!-- root node of slot should be <main> -->
		<slot />
	</div>
</template>

<style lang="scss">
nav.main-nav {
	a {
		padding: 18px;
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
	}
}
</style>
