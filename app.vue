<template>
	<div>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
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
