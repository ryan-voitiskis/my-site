<script setup lang="ts">
import IconArrowCircle from '@/components/icons/IconArrowCircle.vue'
import { useCarousel } from './useCarousel'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { type CarouselButtonVariants, carouselButtonVariants } from '.'
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
	variant?: CarouselButtonVariants['variant']
	class?: HTMLAttributes['class']
}>()

const { canScrollNext, scrollNext } = useCarousel()
</script>

<template>
	<Button
		:disabled="!canScrollNext"
		:class="cn(carouselButtonVariants({ variant }), props.class)"
		variant="blank"
		:size="props.variant === 'modal' ? 'xl-icon' : 'lg-icon'"
		aria-label="Next"
		@click="scrollNext"
	>
		<slot>
			<IconArrowCircle class="h-16 w-16 rotate-180" />
		</slot>
	</Button>
</template>
