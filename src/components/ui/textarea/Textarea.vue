<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { useVModel } from '@vueuse/core'
import { cn } from '@/lib/utils'
import { useValidation } from '@/composables/useValidation'

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
				'flex min-h-[128px] w-full rounded-md border border-input bg-white/30 px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 dark:bg-muted',
				props.class
			)
		"
		v-on="validationListeners"
	/>
</template>
