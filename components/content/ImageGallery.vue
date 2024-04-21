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
	<p class="text-center text-sm italic text-muted-foreground">
		click an image to view fullsize
	</p>
	<div
		class="grid gap-4"
		style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr))"
	>
		<Button
			v-for="(img, i) in images"
			:key="i"
			variant="image"
			size="image"
			class="overflow-hidden"
			aria-label="Open image in modal"
			@click="openInModal(i)"
		>
			<NuxtImg
				class="hover-sepia-invert h-full w-full object-cover transition duration-300"
				:src="img.src"
				:alt="img.alt"
				:preload="i === 0"
				:loading="i === 0 ? 'eager' : 'lazy'"
				:decoding="i === 0 ? 'sync' : 'async'"
				width="512"
				height="512"
				format="webp"
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
					<CarouselItem v-for="(img, i) in images" :key="i + 'n'">
						<!-- 
							src.endsWith('.png') is a hack to get around passing in width and 
							height. don't use this in production site.
						-->
						<NuxtImg
							class="mx-auto h-full max-h-[calc(100vh_-_16rem)] max-w-full object-contain"
							:src="img.src"
							:alt="img.alt"
							:width="images[i].src.endsWith('.png') ? 1024 : 512"
							:height="images[i].src.endsWith('.png') ? 1024 : 512"
							format="webp"
							loading="lazy"
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
