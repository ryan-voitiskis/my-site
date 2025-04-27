<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import type { HTMLAttributes } from 'vue'

import { useValidation } from '@/composables/useValidation'
import { cn } from '@/lib/utils'

const props = defineProps<{
	class?: HTMLAttributes['class']
	defaultValue?: string | number
	modelValue?: string | number
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
	<textarea
		v-model="modelValue"
		:class="
			cn(
				'border-muted placeholder:text-muted-foreground focus-visible:ring-ring bg-input flex min-h-[128px] w-full rounded-md border px-3 py-2 text-sm shadow-xs transition-colors duration-420 focus-visible:ring-1 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50',
				props.class
			)
		"
		v-on="validationListeners"
	/>
</template>
