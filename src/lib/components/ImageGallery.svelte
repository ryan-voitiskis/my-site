<script lang="ts">
	import ArrowLeftCircle from '$lib/components/icons/ArrowLeftCircle.svelte'
	import ArrowRightCircle from '$lib/components/icons/ArrowRightCircle.svelte'
	import type ImageData from '$lib/types/ImageData'

	export let images: ImageData[]
	let modalIsOpen: boolean = false
	let selectedImageIndex: number = 0
	$: indexLabel = `${selectedImageIndex + 1} / ${images.length}`

	function openInModal(index: number) {
		selectedImageIndex = index
		modalIsOpen = true
		document.addEventListener('keydown', (e) => {
			if (e.key === 'Escape') {
				closeModal()
			}
		})
	}

	function closeModal() {
		modalIsOpen = false
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

<button class="clean modal-backdrop" class:open={modalIsOpen} on:click={closeModal}>
	<div class="modal">
		<img src={images[selectedImageIndex].src} alt={images[selectedImageIndex].alt} />
		<div class="controls">
			<button on:click|stopPropagation={previousImage}><ArrowLeftCircle /></button>
			<div class="index-label">{indexLabel}</div>
			<button on:click|stopPropagation={nextImage}><ArrowRightCircle /></button>
		</div>
	</div>
</button>

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
	.modal-backdrop {
		position: fixed;
		background: var(--modal-backdrop);
		backdrop-filter: blur(10px) grayscale(0.8);
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 99;
		display: none;
		&.open {
			display: flex;
		}
	}

	.modal {
		border-radius: 10px;
		z-index: 100;
		display: flex;
		flex-direction: column;
		max-width: v-bind(width);
		max-width: 100%;
		margin: 10px;
		img {
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
			.index-label {
				font-size: 1.4rem;
				display: flex;
				justify-content: center;
				align-items: center;
				color: var(--gallery-ui);
				font-family: var(--sans-serif-font);
			}
		}
	}
</style>
