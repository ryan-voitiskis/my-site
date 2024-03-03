<template>
	<div>
		<header class="mb-6 flex w-full justify-between bg-muted">
			<div
				class="mx-auto flex w-full max-w-screen-xl flex-row items-center justify-between p-4"
			>
				<nav
					class="main-nav -ml-4 flex flex-wrap gap-y-4 font-mono text-[17px] text-nav-text"
				>
					<NuxtLink to="/">about</NuxtLink>
					<NuxtLink to="/blog">blog</NuxtLink>
					<NuxtLink to="/projects">projects</NuxtLink>
				</nav>
				<ThemeToggle class="-my-2" />
			</div>
		</header>

		<!-- root node of slot should be <main> for semantic purpose -->
		<slot />
	</div>
</template>

<style lang="scss">
// if adjusting nav height, also change min-h-[calc(100vh_-_90px)] on <main>
nav.main-nav {
	a {
		display: flex;
		align-items: center;
		height: 56px;
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
	}
}
</style>
