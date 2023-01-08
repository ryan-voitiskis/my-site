<script lang="ts">
	import Prism from 'prismjs'
	import TickCircleIcon from '$lib/components/icons/TickCircleIcon.svelte'

	const chainedTernaryExample = `const message = !isError
  ? 'Success'
  : errorCode === 404
  ? 'Page not found'
  : 'An error has occurred'`

	const nestedTeraryExample = `const message = isError
  ? errorCode === 404
    ? 'Page not found'
    : 'An error has occurred'
  : 'Success'`

	const ifExample = `let message
if (!isError) {
  message = 'Success'
} else {
  if (errorCode === 404) {
    message = 'Page not found'
  } else {
    message = 'An error has occurred'
  }
}`

	const chainedHighlighted = Prism.highlight(
		chainedTernaryExample,
		Prism.languages.javascript,
		'javascript'
	)

	const nestedHighlighted = Prism.highlight(
		nestedTeraryExample,
		Prism.languages.javascript,
		'javascript'
	)

	const ifHighlighted = Prism.highlight(ifExample, Prism.languages.javascript, 'javascript')
</script>

<div class="modal-box standard-text">
	<h2>Chained Ternaries</h2>
	<span>Chained ternary</span>
	<div class="correct">
		<pre class="language-javascript"><code class="language-javascript"
				>{@html chainedHighlighted}</code
			></pre>
		<TickCircleIcon />
	</div>
	<span>Nested ternary</span>
	<pre class="language-javascript"><code class="language-javascript">{@html nestedHighlighted}</code
		></pre>
	<span>If</span>
	<pre class="language-javascript"><code class="language-javascript">{@html ifHighlighted}</code
		></pre>
</div>

<style lang="scss">
	.modal-box {
		max-width: 600px;
		padding: 40px;
		background-color: var(--alt-bg);
		border-radius: 10px;
		text-align: left;
		pre {
			max-width: 100%;
		}
	}

	.correct {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 10px;
		:global(svg) {
			width: 30px;
			height: 30px;
			stroke: var(--correct-green);
		}
	}

	@media (max-width: 440px) {
		.modal-box {
			padding: 20px;
		}
	}
</style>
