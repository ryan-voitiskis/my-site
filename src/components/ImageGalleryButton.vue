<script setup lang="ts">
import { useEventBus } from '@vueuse/core'

import { Button } from '@/components/ui/button'

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
