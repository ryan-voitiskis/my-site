<script setup lang="ts">
import { useEventBus } from '@vueuse/core'
import { type PropType, defineProps, onMounted, onUnmounted, ref } from 'vue'

import IconCrossCircle from '@/components/icons/IconCrossCircle.vue'
import { Button } from '@/components/ui/button'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@/components/ui/carousel'
import type { OptimisedImg } from '@/lib/image'

import ModalContainer from './ModalContainer.vue'

defineProps({
	images: {
		type: Array as PropType<OptimisedImg[]>,
		required: true
	}
})

const bus = useEventBus<number>('openInModal')
const unsubscribe = bus.on(openInModal)
onUnmounted(() => unsubscribe())

const carouselContainerRef = ref<InstanceType<typeof Carousel> | null>(null)
const showModal = ref(false)
const current = ref(0)

async function openInModal(i: number) {
	showModal.value = true
	carouselContainerRef.value?.carouselApi?.scrollTo(i, true)
	carouselContainerRef.value?.$el?.focus()
	current.value = i + 1
}

onMounted(() => {
	carouselContainerRef.value?.carouselApi?.on(
		'select',
		(carouselApi) => (current.value = carouselApi.selectedScrollSnap() + 1)
	)
})
</script>

<template>
	<ModalContainer v-model="showModal">
		<Button
			variant="blank"
			size="xl-icon"
			class="m-4 mx-auto flex items-center justify-center text-yellow-100 hover:text-yellow-300"
			aria-label="Close modal"
			@click="showModal = false"
		>
			<IconCrossCircle class="h-16 w-16" />
		</Button>
		<Carousel ref="carouselContainerRef" tabindex="-1">
			<CarouselContent>
				<CarouselItem v-for="image in images" :key="image.src">
					<img
						v-bind="image.attributes"
						class="mx-auto h-full max-h-[calc(100vh_-_16rem)] max-w-full object-contain"
						:src="image.src"
						:alt="image.alt"
					/>
				</CarouselItem>
			</CarouselContent>
			<div class="my-4 flex justify-center">
				<CarouselPrevious variant="modal" />
				<div
					class="flex w-32 select-none items-center justify-center text-center font-mono text-2xl font-semibold text-yellow-100"
				>
					{{ current }} / {{ images.length }}
				</div>
				<CarouselNext variant="modal" />
			</div>
		</Carousel>
	</ModalContainer>
</template>
