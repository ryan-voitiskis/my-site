<script lang="ts" setup>
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

const showModal = ref(false)
const selectedIndex = ref(0)
const indexLabel = computed(
	() => `${selectedIndex.value + 1} / ${props.images?.length}`
)

function openInModal(index: number) {
	selectedIndex.value = index
	showModal.value = true
}

function previousImage() {
	selectedIndex.value =
		selectedIndex.value === 0
			? props.images.length - 1
			: selectedIndex.value - 1
}

function nextImage() {
	selectedIndex.value =
		selectedIndex.value === props.images.length - 1
			? 0
			: selectedIndex.value + 1
}

function handleKeydown(event: KeyboardEvent) {
	if (event.key === 'ArrowLeft') previousImage()
	else if (event.key === 'ArrowRight') nextImage()
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
		<img
			class="h-full max-h-[80vh] max-w-full object-contain"
			:src="images[selectedIndex].src"
			:alt="images[selectedIndex].alt"
		/>
		<div class="flex justify-center font-sans text-gallery-ui">
			<button
				class="flex h-28 w-28 items-center justify-center text-gallery-ui hover:text-gallery-ui-hover"
				@click.stop="previousImage"
			>
				<IconArrowCircle class="h-16 w-16" />
			</button>
			<div class="flex w-24 items-center justify-center text-lg">
				{{ indexLabel }}
			</div>
			<button
				class="flex h-28 w-28 items-center justify-center text-gallery-ui hover:text-gallery-ui-hover"
				@click.stop="nextImage"
			>
				<IconArrowCircle class="h-16 w-16 rotate-180" />
			</button>
		</div>
	</ModalContainer>
</template>

<style lang="scss" scoped>
.image-gallery {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	grid-gap: 16px;
}
</style>
