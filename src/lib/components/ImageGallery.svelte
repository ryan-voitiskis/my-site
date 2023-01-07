<script lang="ts">
	import ArrowLeftCircle from '$lib/components/icons/ArrowLeftCircle.svelte'
	import ArrowRightCircle from '$lib/components/icons/ArrowRightCircle.svelte'
	import type ImageData from '$lib/types/ImageData'
	import ModalContainer from './ModalContainer.svelte'

	export let images: ImageData[]
	let modal: ModalContainer
	let selectedImageIndex: number = 0
	$: indexLabel = `${selectedImageIndex + 1} / ${images.length}`

	function openInModal(index: number) {
		selectedImageIndex = index
		modal.openModal()
	}

	function previousImage() {
		if (selectedImageIndex === 0) {
			selectedImageIndex = images.length - 1
		} else {
			selectedImageIndex = selectedImageIndex - 1
		}
	}

	function nextImage() {
		if (selectedImageIndex === images.length - 1) {
			selectedImageIndex = 0
		} else {
			selectedImageIndex = selectedImageIndex + 1
		}
	}
</script>

<div class="image-gallery">
	{#each images as { src, alt }, index}
		<button class="clean image" on:click={() => openInModal(index)}>
			<img {src} {alt} />
		</button>
	{/each}
</div>

<ModalContainer bind:this={modal}>
	<img class="only" src={images[selectedImageIndex].src} alt={images[selectedImageIndex].alt} />
	<div class="controls">
		<button on:click|stopPropagation={previousImage}><ArrowLeftCircle /></button>
		<div class="index-label">{indexLabel}</div>
		<button on:click|stopPropagation={nextImage}><ArrowRightCircle /></button>
	</div>
</ModalContainer>

<style lang="scss">
	.image-gallery {
		display: grid;
		margin: 10px;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		grid-gap: 10px;
		.image {
			overflow: hidden;
			border-radius: 10px;
			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
	}

	.index-label {
		font-size: 1.4rem;
		display: flex;
		justify-content: center;
		align-items: center;
		color: var(--gallery-ui);
		font-family: var(--sans-serif-font);
	}

	img.only {
		max-width: 100%;
	}

	.controls {
		display: flex;
		justify-content: space-around;
		button {
			height: 160px;
			width: 160px;
			background: transparent;
			border: none;
			display: flex;
			justify-content: center;
			align-items: center;
			:global(svg) {
				height: 60%;
				width: 60%;
				color: var(--gallery-ui);
			}
			&:hover {
				:global(svg) {
					color: var(--gallery-ui-hover);
				}
			}
		}
	}
</style>
