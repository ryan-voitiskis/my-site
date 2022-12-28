<script lang="ts">
	import ChatbotDisplayIcon from '$lib/components/ChatbotDisplayIcon.svelte'
	import HumanDisplayIcon from '$lib/components/HumanDisplayIcon.svelte'

	export let fromHuman: boolean
</script>

<div class="wrapper {fromHuman ? 'from-human' : 'from-bot'}">
	<div class="message">
		{#if fromHuman === true}
			<div class="icon">
				<HumanDisplayIcon />
			</div>
		{:else}
			<div class="icon">
				<ChatbotDisplayIcon />
			</div>
		{/if}
		<div class="content">
			<slot />
		</div>
	</div>
</div>

<style lang="scss">
	.wrapper {
		margin: 0 -110px 0 -110px;
		&.from-human {
			.icon {
				background-color: #94a4a6;
			}
		}
		&.from-bot {
			background: linear-gradient(
				to right,
				transparent 0,
				var(--alt-bg) 100px,
				var(--alt-bg) calc(var(--page-width) + 100px),
				transparent calc(var(--page-width) + 200px)
			);
			.icon {
				background-color: rgb(16, 163, 127);
			}
		}
		.message {
			max-width: var(--page-width);
			margin: 0 auto;
			display: grid;
			grid-template-columns: 52px 1fr 52px;
			padding: 40px 10px;
			.icon {
				height: 30px;
				width: 30px;
				border-radius: 2px;
				display: flex;
				align-items: center;
				justify-content: center;
			}
			.content {
				color: var(--darkest-text);
				grid-column: 2 / 3;
				overflow: hidden;
			}
		}
	}

	@media (max-width: 1080px) {
		.wrapper {
			margin: 0 -60px 0 -60px;
			&.from-bot {
				background: linear-gradient(
					to right,
					transparent 0,
					var(--alt-bg) 50px,
					var(--alt-bg) calc(var(--page-width) + 50px),
					transparent calc(var(--page-width) + 100px)
				);
			}
		}
	}

	@media (max-width: 980px) {
		.wrapper {
			margin: 0 calc(-1 * var(--horizontal-padding));
			&.from-bot {
				background: var(--alt-bg);
			}
			.message > .icon {
				margin-left: var(--horizontal-padding);
			}
		}
	}

	// media max-width is 2*horizontal-padding + page-width
	@media (max-width: 880px) {
		.wrapper {
			margin: 0;
		}
	}

	// media max-width is page-width
	@media (max-width: 860px) {
		.wrapper > .message {
			width: 100vw;
		}
	}

	@media (max-width: 570px) {
		.wrapper {
			.message {
				grid-template-columns: 10px 1fr 10px;
				padding: 40px 0;
				.icon {
					grid-column: 2 /3;
					margin: 0 0 20px 0;
				}
			}
		}
	}
</style>
