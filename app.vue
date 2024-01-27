<template>
	<div>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
	<h1>Ryan Voitiskis</h1>

	<div class="links">
		<a href="mailto:ryanvoitiskis@pm.me">ryanvoitiskis@pm.me</a> |
		<a href="https://github.com/ryan-voitiskis">GitHub</a>
	</div>

	<p>
		Hey, I'm Ryan. I build web apps with JavaScript. I enjoy working with Vue
		and recently SvelteKit. I am interested in front-end and back-end
		development, focusing on creating intuitive and powerful apps.
	</p>

	<p>
		Head over to <a href="/projects">projects</a> to see what I've been working
		on lately.
	</p>
	<ModalContainer>
		<TernaryExample />
	</ModalContainer>
</template>

<style lang="scss">
main {
	padding: 0 10px 300px 10px;
	max-width: var(--page-width);
	margin: 0 auto;
}

.links {
	margin: 20px 30px;
	font-family: var(--monospace-font);
	font-size: 1.1rem;
}

button.inline-subtle {
	display: inline;
	color: var(--text);
	font-family: var(--serif-font);
	font-size: 1em;
	background-color: var(--alt-bg);
	border: none;
	text-decoration: underline;
	&:hover {
		color: var(--text-strong);
		background-color: var(--alt-alt-bg);
	}
}
@media (max-width: 740px) {
	.email {
		text-align: center;
	}
}
</style>
