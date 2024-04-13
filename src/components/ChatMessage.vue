<script setup lang="ts">
import IconHuman from '@/components/icons/IconHuman.vue'
import IconOpenAi from '@/components/icons/IconOpenAi.vue'
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
			<IconHuman class="h-5" />
		</div>
		<div
			v-else
			class="mb-4 flex h-7 w-7 items-center justify-center rounded-md bg-[rgb(16,163,127)]"
		>
			<IconOpenAi class="h-5" />
		</div>
		<div class="content">
			<slot />
		</div>
	</div>
</template>
