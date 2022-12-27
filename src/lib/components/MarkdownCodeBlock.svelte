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
	pre {
		overflow: scroll;
		padding-bottom: 10px;
		border-radius: 0.3em;
	}

	@media (max-width: 570px) {
		pre {
			width: calc(100vw - 2 * var(--horizontal-padding));
		}
	}
</style>
