<script setup lang="ts">
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
		class="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-backdrop backdrop-blur"
		:class="{ '!z-[-1]': !show }"
		@click.self="show = false"
	>
		<div class="max-h-screen" role="dialog" aria-modal="true">
			<slot />
		</div>
	</div>
</template>
