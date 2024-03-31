<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { type BadgeVariants, badgeVariants } from '.'
import { cn } from '@/lib/utils'

const props = defineProps<{
  variant?: BadgeVariants['variant']
  class?: HTMLAttributes['class']
	text?: string
}>()
</script>

<template>
  <div :class="cn(badgeVariants({ variant }), props.class)">
		{{ text }}
    <slot />
  </div>
</template>
