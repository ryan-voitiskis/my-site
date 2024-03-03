<template>
	<div class="bg-background">
		<header class="flex w-full justify-between bg-muted">
			<div
				class="mx-auto flex w-full max-w-screen-xl flex-row items-center justify-between p-4"
			>
				<nav
					class="main-nav -ml-4 flex flex-wrap gap-y-4 font-mono text-[17px]"
				>
					<NuxtLink to="/">about</NuxtLink>
					<NuxtLink to="/blog">blog</NuxtLink>
					<NuxtLink to="/projects">projects</NuxtLink>
				</nav>
				<ThemeToggle class="-my-2" />
			</div>
		</header>

		<div class="min-h-[calc(100vh_-_56px)] pt-8">
			<!-- root node of slot should be <main> for semantic purpose -->
			<slot />
		</div>
	</div>
</template>

<style lang="scss">
nav.main-nav {
	a {
		color: hsl(var(--nav-text));
		display: flex;
		align-items: center;
		height: 56px; // if adjusting height, change min-h-[calc(100vh_-_56px)]
		padding: 16px;
		margin: -16px 0;
		text-decoration: none;
		text-decoration-thickness: 0.1rem !important;
		&:hover {
			color: hsl(var(--nav-hover));
			text-decoration: underline;
		}
		&.router-link-active {
			text-decoration: underline;
			text-decoration-color: hsl(var(--nav-underline));
		}
	}
}
</style>
