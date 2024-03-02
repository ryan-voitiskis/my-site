<script setup lang="ts">
interface Props {
	width?: string
	background?: string
}

withDefaults(defineProps<Props>(), {
	width: 'auto',
	background: 'var(--bg)'
})

const show = defineModel({ default: false, type: Boolean })

function escapeClose(e: KeyboardEvent) {
	if (e.key === 'Escape') show.value = false
}

function onClose() {
	if (!document) return
	document.body.style.overflow = 'visible'
	document.body.removeEventListener('keydown', escapeClose)
}

function onOpen() {
	if (!document) return
	document.body.addEventListener('keydown', escapeClose)
	document.body.style.overflow = 'hidden' // prevent scrolling of body when modal shown
}

onBeforeUnmount(() => {
	document.body.style.overflow = 'visible'
	document.body.removeEventListener('keydown', escapeClose)
})

watchEffect(() => {
	if (show.value) onOpen()
	else onClose()
})
</script>

<template>
	<div
		class="modal-backdrop"
		:class="{ '!z-[-1]': !show }"
		@click.self="show = false"
	>
		<div class="modal" role="dialog" aria-modal="true">
			<slot />
		</div>
	</div>
</template>

<style lang="scss">
.modal-backdrop {
	position: fixed;
	background: var(--backdrop);
	backdrop-filter: blur(4px);
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 99;
	.modal {
		max-height: 100%;
		background-color: v-bind(background);
		transition:
			background-color 200ms,
			color 200ms;
		border-radius: 10px;
		z-index: 100;
		display: flex;
		flex-direction: column;
		width: v-bind(width);
		margin: 10px;
		&.dynamic {
			max-height: calc(100% - 20px);
		}
		&.full {
			height: calc(100% - 20px);
		}
	}
}

@media screen and (max-width: 768px) {
	.modal-backdrop {
		.modal {
			width: 100%;
			margin: 0;
			border-radius: 0;
		}
	}
}
</style>
