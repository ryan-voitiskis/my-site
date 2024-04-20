<script setup lang="ts">
import { defineModel, onBeforeUnmount, watchEffect } from 'vue'

const show = defineModel({
	default: false,
	type: Boolean
})

function escapeClose(e: KeyboardEvent) {
	if (e.key === 'Escape') show.value = false
}

function onClose() {
	if (typeof document !== 'undefined') {
		document.body.style.overflow = 'visible'
		document.body.removeEventListener('keydown', escapeClose)
	}
}

function onOpen() {
	if (typeof document !== 'undefined') {
		document.body.addEventListener('keydown', escapeClose)
		document.body.style.overflow = 'hidden' // prevent scrolling of body when modal shown
	}
}

onBeforeUnmount(() => {
	if (typeof document !== 'undefined') {
		document.body.style.overflow = 'visible'
		document.body.removeEventListener('keydown', escapeClose)
	}
})

watchEffect(() => {
	if (show.value) onOpen()
	else onClose()
})
</script>

<template>
	<div
		class="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-backdrop backdrop-blur"
		v-show="show"
		@click.self="show = false"
	>
		<div class="max-h-screen" role="dialog" aria-modal="true">
			<slot />
		</div>
	</div>
</template>
