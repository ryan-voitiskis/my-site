<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import IconArrowCircle from '@/components/icons/IconArrowCircle.vue'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

import { type CarouselButtonVariants, carouselButtonVariants } from '.'
import { useCarousel } from './useCarousel'

const props = defineProps<{
	variant?: CarouselButtonVariants['variant']
	class?: HTMLAttributes['class']
}>()

const { canScrollPrev, scrollPrev } = useCarousel()
</script>

<template>
	<Button
		:disabled="!canScrollPrev"
		:class="cn(carouselButtonVariants({ variant }), props.class)"
		variant="blank"
		:size="props.variant === 'modal' ? 'xl-icon' : 'lg-icon'"
		aria-label="Previous"
		@click="scrollPrev"
	>
		<slot>
			<IconArrowCircle class="h-16 w-16" />
		</slot>
	</Button>
</template>
