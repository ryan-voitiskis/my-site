<!-- this component is used for code blocks within components that are themselves within a md file -->
<script lang="ts">
	import Prism from 'prismjs'
	export let content: string
	export let lang: string

	const langClassName = lang ? `language-${lang}` : ''
	const html = Prism.highlight(content, Prism.languages[lang], lang)
</script>

<pre class={langClassName}><code class={langClassName}>{@html html}</code></pre>

<style lang="scss">
	div[class*='language-'],
	pre[class*='language-'] {
		background-color: var(--alt-alt-bg);
		overflow-x: scroll;
		padding-bottom: 10px;
	}

	@media (max-width: 570px) {
		pre {
			width: calc(100vw - 2 * var(--horizontal-padding));
		}
	}
</style>
