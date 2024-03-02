<script setup lang="ts">
import { useCarousel } from './useCarousel'
import type { WithClassAsProps } from './interface'
import { Button } from '~/components/ui/button'

const props = defineProps<WithClassAsProps>()

const { orientation, canScrollNext, scrollNext } = useCarousel()
</script>

<template>
	<Button
		:disabled="!canScrollNext"
		:class="
			cn(
				'flex h-28 w-28 items-center justify-center text-gallery-ui hover:text-gallery-ui-hover',
				orientation === 'horizontal'
					? '-right-12 top-1/2 -translate-y-1/2'
					: '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
				props.class
			)
		"
		variant="outline"
		@click="scrollNext"
	>
		<slot>
			<IconArrowCircle class="h-16 w-16 rotate-180" />
		</slot>
	</Button>
</template>
