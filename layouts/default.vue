<template>
	<div class="bg-background">
		<header class="flex h-14 w-full justify-between bg-muted">
			<div
				class="mx-auto flex w-full max-w-screen-xl flex-row items-center justify-between p-4"
			>
				<nav id="main_nav" class="-ml-4 flex flex-wrap gap-y-4">
					<Button as-child variant="nav-link" class="-my-4">
						<NuxtLink to="/">about</NuxtLink>
					</Button>
					<Button as-child variant="nav-link" class="-my-4">
						<NuxtLink to="/blog">blog</NuxtLink>
					</Button>
					<Button as-child variant="nav-link" class="-my-4">
						<NuxtLink to="/projects">projects</NuxtLink>
					</Button>
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
#main_nav {
	a {
		&:hover {
			text-decoration: none;
		}
		&.router-link-active {
			text-decoration: underline;
			text-decoration-color: hsl(var(--primary));
			text-decoration-thickness: 0.1rem;
		}
	}
}
</style>
