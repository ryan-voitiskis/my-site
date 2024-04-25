<script setup lang="ts">
import { type PropType, defineProps, onMounted, ref } from 'vue'

import IconCrossCircle from '@/components/icons/IconCrossCircle.vue'
import { Button } from '@/components/ui/button'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@/components/ui/carousel'
import type { OptimisedGallery } from '@/lib/image'

import ModalContainer from './ModalContainer.vue'

defineProps({
	gallery: {
		type: Array as PropType<OptimisedGallery>,
		required: true
	}
})

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
	<p class="italic text-center text-muted-foreground text-sm">
		click an image to view fullsize
	</p>
	<div
		class="grid gap-4"
		style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr))"
	>
		<Button
			v-for="(image, i) in gallery"
			variant="image"
			size="image"
			class="hover-sepia-invert overflow-hidden transition duration-300"
			aria-label="Open image in modal"
			@click="openInModal(i)"
		>
			<img
				:srcset="image.preview.srcSet.attribute"
				v-bind="image.preview.attributes"
				class="h-full w-full object-cover"
			/>
		</Button>
	</div>

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
				<CarouselItem v-for="image in gallery" :key="image.full.src">
					<img
						:src="image.full.src"
						v-bind="image.full.attributes"
						class="mx-auto h-full max-h-[calc(100vh_-_16rem)] max-w-full object-contain"
					/>
				</CarouselItem>
			</CarouselContent>
			<div class="my-4 flex justify-center">
				<CarouselPrevious variant="modal" />
				<div
					class="flex w-32 select-none items-center justify-center text-center font-mono text-2xl font-semibold text-yellow-100"
				>
					{{ current }} / {{ gallery.length }}
				</div>
				<CarouselNext variant="modal" />
			</div>
		</Carousel>
	</ModalContainer>
</template>
