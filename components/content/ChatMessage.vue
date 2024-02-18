<script setup lang="ts">
defineProps({ fromHuman: Boolean })
</script>

<template>
	<div
		class="border-1 mb-4 rounded-xl border p-4"
		:class="{
			' border-black/20 bg-[#94a4a6]/5': fromHuman,
			'border-[rgba(82,144,128,0.4)] bg-[rgba(16,163,126,0.03)]': !fromHuman
		}"
	>
		<div
			v-if="fromHuman"
			class="mb-4 flex h-7 w-7 items-center justify-center rounded-md bg-[#94a4a6]"
		>
			<HumanDisplayIcon class="h-5" />
		</div>
		<div
			v-else
			class="mb-4 flex h-7 w-7 items-center justify-center rounded-md bg-[rgb(16,163,127)]"
		>
			<ChatbotDisplayIcon class="h-5" />
		</div>
		<div class="content">
			<slot />
		</div>
	</div>
</template>
