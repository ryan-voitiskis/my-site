<script setup lang="ts">
defineProps({ fromHuman: Boolean })
</script>

<template>
	<div
		class="wrapper"
		:class="{ 'from-human': fromHuman, 'from-bot': !fromHuman }"
	>
		<div class="message">
			<div
				v-if="fromHuman"
				class="flex h-8 w-8 items-center justify-center rounded-md bg-[#94a4a6]"
			>
				<HumanDisplayIcon class="h-6" />
			</div>
			<div
				v-else
				class="flex h-8 w-8 items-center justify-center rounded-md bg-[rgb(16,163,127)]"
			>
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
	&.from-bot {
		background: linear-gradient(
			to right,
			transparent 0,
			var(--alt-bg) 100px,
			var(--alt-bg) calc(860px + 72px),
			transparent calc(860px + 144px)
		);
	}
	.message {
		max-width: 860px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: 52px 1fr 52px;
		padding: 40px 10px;
		.content {
			color: var(--text-strong);
			grid-column: 2 / 3;
			overflow: hidden;
		}
	}
}
</style>
