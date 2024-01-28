<script setup lang="ts">
// this component is used for code blocks within components that are themselves within a md file
import Prism from 'prismjs'

const props = defineProps({
	content: {
		type: String,
		required: true
	},
	lang: {
		type: String,
		required: true
	}
})

const langClassName = props.lang ? `language-${props.lang}` : ''
const html = Prism.highlight(
	props.content,
	Prism.languages[props.lang],
	props.lang
)
</script>

<template>
	<pre :class="langClassName">
		<code :class="langClassName">{{ html }}</code>
	</pre>
</template>

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
