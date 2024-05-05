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
				'flex h-9 w-full rounded-md border border-input bg-white/30 px-3 py-1 text-sm shadow-sm transition-colors duration-420 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 dark:bg-muted',
				props.class
			)
		"
		v-on="validationListeners"
	/>
</template>
