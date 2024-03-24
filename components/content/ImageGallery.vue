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
		style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr))"
	>
		<Button
			v-for="(image, index) in images"
			:key="index"
			variant="image"
			size="image"
			class="overflow-hidden transition-all duration-300 hover:invert"
			@click="openInModal(index)"
		>
			<img :src="image.src" :alt="image.alt" />
		</Button>

		<ModalContainer v-model="showModal">
			<Button
				variant="blank"
				size="xl-icon"
				class="m-4 mx-auto flex items-center justify-center text-yellow-100 hover:text-yellow-300"
				@click="showModal = false"
			>
				<IconCrossCircle class="h-16 w-16" />
			</Button>
			<Carousel ref="carouselContainerRef" tabindex="-1">
				<CarouselContent>
					<CarouselItem v-for="(_, index) in images" :key="index">
						<img
							class="mx-auto h-full max-h-[calc(100vh_-_16rem)] max-w-full object-contain"
							:src="images[index].src"
							:alt="images[index].alt"
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
