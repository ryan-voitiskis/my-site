<script lang="ts">
	export let modalIsOpen: boolean = false

	export function openModal() {
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
</script>

<button class="clean modal-backdrop" class:open={modalIsOpen} on:click={closeModal}>
	<div class="modal">
		<slot />
	</div>
</button>

<style lang="scss">
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
	}
</style>
