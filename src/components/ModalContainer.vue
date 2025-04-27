<script setup lang="ts">
import { onBeforeUnmount, watchEffect } from 'vue'

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
		class="bg-backdrop fixed top-0 left-0 flex h-full w-full items-center justify-center backdrop-blur-sm"
		:class="{ invisible: !show }"
		:style="{ zIndex: show ? '50' : '-1' }"
		@click.self="show = false"
	>
		<div class="max-h-screen" role="dialog" aria-modal="true">
			<slot />
		</div>
	</div>
</template>
