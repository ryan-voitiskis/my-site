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
				'flex items-center justify-center text-yellow-100 hover:text-yellow-300',
				props.class
			)
		"
		variant="blank"
		size="xl-icon"
		@click="scrollPrev"
	>
		<slot>
			<IconArrowCircle class="h-16 w-16" />
		</slot>
	</Button>
</template>
