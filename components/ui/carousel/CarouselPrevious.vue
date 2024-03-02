<script setup lang="ts">
import { useCarousel } from './useCarousel'
import type { WithClassAsProps } from './interface'
import { Button } from '~/components/ui/button'

const props = defineProps<WithClassAsProps>()

const { orientation, canScrollPrev, scrollPrev } = useCarousel()
</script>

<template>
	<Button
		:disabled="!canScrollPrev"
		:class="
			cn(
				'flex h-28 w-28 items-center justify-center text-gallery-ui hover:text-gallery-ui-hover',
				props.class
			)
		"
		variant="blank"
		@click="scrollPrev"
	>
		<slot>
			<IconArrowCircle class="h-16 w-16" />
		</slot>
	</Button>
</template>
