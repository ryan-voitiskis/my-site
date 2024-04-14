<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { useEventBus } from '@vueuse/core'

defineProps<{ index: number }>()

const bus = useEventBus<number>('openInModal')
</script>

<template>
	<Button
		variant="image"
		size="image"
		class="hover-sepia-invert overflow-hidden transition duration-300"
		aria-label="Open image in modal"
		@click="bus.emit(index)"
	>
		<slot />
	</Button>
</template>
