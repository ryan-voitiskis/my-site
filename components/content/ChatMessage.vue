<script setup lang="ts">
defineProps({ fromHuman: Boolean })
</script>

<template>
	<div
		class="wrapper"
		:class="{ 'from-human': fromHuman, 'from-bot': !fromHuman }"
	>
		<div class="message">
			<div v-if="fromHuman" class="icon">
				<HumanDisplayIcon class="h-6" />
			</div>
			<div v-else class="icon">
				<ChatbotDisplayIcon class="h-6" />
			</div>
			<div class="content">
				<slot />
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
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
			var(--alt-bg) calc(860px + 100px),
			transparent calc(860px + 200px)
		);
		.icon {
			background-color: rgb(16, 163, 127);
		}
	}
	.message {
		max-width: 860px;
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
			color: var(--text-strong);
			grid-column: 2 / 3;
			overflow: hidden;
		}
	}
}
</style>
