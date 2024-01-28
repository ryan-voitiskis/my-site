<script lang="ts" setup>
import type { ImageAttrs } from 'types/types'
const props = defineProps({
	withPreviews: {
		type: Boolean,
		default: true
	},
	images: {
		type: Array as PropType<ImageAttrs[]>,
		default: () => []
	}
})

const modal = ref()
const selectedImageIndex = ref(0)
const indexLabel = computed(
	() => `${selectedImageIndex.value + 1} / ${props.images?.length}`
)

function openInModal(index: number) {
	selectedImageIndex.value = index
	modal.value.openModal()
}

function previousImage() {
	selectedImageIndex.value =
		selectedImageIndex.value === 0
			? props.images.length - 1
			: selectedImageIndex.value - 1
}

function nextImage() {
	selectedImageIndex.value =
		selectedImageIndex.value === props.images.length - 1
			? 0
			: selectedImageIndex.value + 1
}

function handleKeydown(event: KeyboardEvent) {
	if (event.key === 'ArrowLeft') {
		previousImage()
	} else if (event.key === 'ArrowRight') {
		nextImage()
	}
}

onMounted(() => {
	window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
	window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
	<div v-if="withPreviews" class="image-gallery">
		<button
			v-for="(image, index) in images"
			:key="index"
			class="clean image"
			@click="openInModal(index)"
		>
			<img :src="image.src" :alt="image.alt" />
		</button>
	</div>

	<ModalContainer ref="modal">
		<img
			class="in-modal"
			:src="images[selectedImageIndex].src"
			:alt="images[selectedImageIndex].alt"
		/>
		<div class="controls">
			<button @click.stop="previousImage">
				<ArrowCircleIcon />
			</button>
			<div class="index-label">{{ indexLabel }}</div>
			<button @click.stop="nextImage">
				<ArrowCircleIcon class="rotate-90" />
			</button>
		</div>
	</ModalContainer>
</template>
