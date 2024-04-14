<script setup lang="ts">
import { Primitive, type PrimitiveProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

import { cn } from '@/lib/utils'

import { type ButtonVariants, buttonVariants } from '.'

interface Props extends PrimitiveProps {
	variant?: ButtonVariants['variant']
	size?: ButtonVariants['size']
	as?: string
	class?: HTMLAttributes['class']
	id?: HTMLAttributes['id']
}

const props = withDefaults(defineProps<Props>(), {
	as: 'button'
})
</script>

<template>
	<Primitive
		:id="id"
		:as="as"
		:as-child="asChild"
		:class="cn(buttonVariants({ variant, size }), props.class)"
	>
		<slot />
	</Primitive>
</template>
