<script lang="ts" setup>
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '~/components/ui/carousel'

defineProps({
	withPreviews: {
		type: Boolean,
		default: true
	},
	images: {
		type: Array as PropType<ImageAttrs[]>,
		default: () => []
	}
})

const carouselContainerRef = ref<InstanceType<typeof Carousel> | null>(null)
const showModal = ref(false)
const selectedIndex = ref(0)

async function openInModal(index: number) {
	showModal.value = true
	carouselContainerRef.value?.carouselApi?.scrollTo(index, true)
}

onMounted(() => {
	carouselContainerRef.value?.carouselApi?.on(
		'select',
		(carouselApi) =>
			(selectedIndex.value = carouselApi.selectedScrollSnap() + 1)
	)
})
</script>

<template>
	<div v-if="withPreviews" class="image-gallery">
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
	</div>

	<ModalContainer v-model="showModal" background="transparent">
		<Carousel ref="carouselContainerRef">
			<CarouselContent>
				<CarouselItem v-for="(_, index) in images" :key="index">
					<img
						class="mx-auto h-full max-h-[80vh] max-w-full object-contain"
						:src="images[index].src"
						:alt="images[index].alt"
					/>
					<span class="text-4xl font-semibold">
						{{ index + 1 }}/{{ images.length }}
					</span>
				</CarouselItem>
			</CarouselContent>
			<div class="flex justify-center font-sans text-gallery-ui">
				<CarouselPrevious />
				<CarouselNext />
			</div>
		</Carousel>
	</ModalContainer>
</template>

<style lang="scss" scoped>
.image-gallery {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	grid-gap: 16px;
}
</style>
