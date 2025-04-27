<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import type { HTMLAttributes } from 'vue'

import { useValidation } from '@/composables/useValidation'
import { cn } from '@/lib/utils'

const props = defineProps<{
	defaultValue?: string | number
	modelValue?: string | number
	class?: HTMLAttributes['class']
	name: string
}>()

const emits = defineEmits<{
	(e: 'update:modelValue', payload: string | number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
	passive: true,
	defaultValue: props.defaultValue
})

const { validationListeners } = useValidation(() => props.name)
</script>

<template>
	<input
		v-model="modelValue"
		:class="
			cn(
				'border-muted placeholder:text-muted-foreground focus-visible:ring-ring bg-input flex h-9 w-full rounded-md border px-3 py-1 text-sm shadow-xs transition-colors duration-420 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-1 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50',
				props.class
			)
		"
		v-on="validationListeners"
	/>
</template>
