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
		class="overflow-hidden transition-all duration-300 hover:invert"
		aria-label="Open image in modal"
		@click="bus.emit(index)"
	>
		<slot />
	</Button>
</template>
