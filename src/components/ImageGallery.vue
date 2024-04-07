<script setup lang="ts">
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@/components/ui/carousel'
import { Button } from '@/components/ui/button'
import IconCrossCircle from '@/components/icons/IconCrossCircle.vue'
import ModalContainer from './ModalContainer.vue'
import { defineProps, ref, onMounted, type PropType } from 'vue'
import type { GetImageResult } from 'astro'

defineProps({
	images: {
		type: Array as PropType<GetImageResult[]>,
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
	<div
		class="grid gap-4"
		style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr))"
	>
		<Button
			v-for="(img, i) in images"
			:key="i"
			variant="image"
			size="image"
			class="overflow-hidden transition-all duration-300 hover:invert"
			aria-label="Open image in modal"
			@click="openInModal(i)"
		>
			<img
				:src="img.src"
				:alt="img.attributes.alt"
				v-bind="img.attributes"
				class="h-full w-full object-cover"
			/>
		</Button>

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
					<CarouselItem v-for="(_, i) in images" :key="i">
						<img
							class="mx-auto h-full max-h-[calc(100vh_-_16rem)] max-w-full object-contain"
							:src="images[i].options.src.src"
							:alt="images[i].attributes.alt"
							:width="images[i].options.src.width"
							:height="images[i].options.src.height"
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
	</div>
</template>
