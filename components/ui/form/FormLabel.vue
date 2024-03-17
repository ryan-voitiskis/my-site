<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import type { LabelProps } from 'radix-vue'
import { useFormField } from './useFormField'
import { Label } from '@/components/ui/label'

const props = defineProps<LabelProps & { class?: HTMLAttributes['class'] }>()

const { formItemId } = useFormField()
</script>

<template>
	<Label :class="cn(props.class)" :for="formItemId">
		<slot />
	</Label>
</template>
