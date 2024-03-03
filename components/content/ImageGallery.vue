<script lang="ts" setup>
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '~/components/ui/carousel'

defineProps({
	images: {
		type: Array as PropType<ImageAttrs[]>,
		default: () => []
	}
})

const carouselContainerRef = ref<InstanceType<typeof Carousel> | null>(null)
const showModal = ref(false)
const current = ref(0)

async function openInModal(index: number) {
	showModal.value = true
	carouselContainerRef.value?.carouselApi?.scrollTo(index, true)
	carouselContainerRef.value?.$el?.focus()
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
		style="grid-template-columns: repeat(auto-fill, minmax(320px, 1fr))"
	>
		<button
			v-for="(image, index) in images"
			:key="index"
			class="clean overflow-hidden rounded-lg transition-all duration-300 hover:invert"
			@click="openInModal(index)"
		>
			<img
				:src="image.src"
				:alt="image.alt"
				class="h-full w-full object-cover"
			/>
		</button>

		<ModalContainer v-model="showModal">
			<Carousel ref="carouselContainerRef">
				<CarouselContent>
					<CarouselItem v-for="(_, index) in images" :key="index">
						<img
							class="mx-auto h-full max-h-[calc(100vh_-_8rem)] max-w-full object-contain"
							:src="images[index].src"
							:alt="images[index].alt"
						/>
					</CarouselItem>
				</CarouselContent>
				<div class="mt-4 flex justify-center">
					<CarouselPrevious />
					<div
						class="flex w-24 items-center justify-center text-center font-serif text-3xl font-semibold text-gallery-ui"
					>
						{{ current }} / {{ images.length }}
					</div>
					<CarouselNext />
				</div>
			</Carousel>
		</ModalContainer>
	</div>
</template>
