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
				'flex items-center justify-center text-yellow-100 hover:text-yellow-300',
				props.class
			)
		"
		variant="blank"
		size="xl-icon"
		@click="scrollNext"
	>
		<slot>
			<IconArrowCircle class="h-16 w-16 rotate-180" />
		</slot>
	</Button>
</template>
