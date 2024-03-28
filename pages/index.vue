<script setup lang="ts">
import ContactForm from '~/components/ContactForm.vue'
import { toast } from 'vue-sonner'
const contactForm = ref<InstanceType<typeof ContactForm>>()

function emailToClipboard() {
	navigator.clipboard.writeText('ryanvoitiskis@pm.me').then(() => {
		toast.success(`copied 'ryanvoitiskis@pm.me' to clipboard`, {
			duration: 300000
		})
	})
}
</script>

<template>
	<main class="mx-auto w-full px-4 pb-48">
		<div class="mx-auto w-full max-w-screen-xl px-4">
			<h1 class="font-mono text-sm font-[120] text-muted-foreground">
				> ryan_voitiskis
			</h1>
		</div>
		<div class="mx-auto flex w-full flex-wrap justify-center gap-8 pb-48">
			<div class="w-full max-w-64 pt-16 text-sm text-muted-foreground">
				<p class="mb-2">developer from melbourne, au</p>
				<p class="mb-2">fullstack, mostly with js/ts</p>
				<Button
					variant="blank"
					class="mb-0 p-0 font-sans font-medium"
					@click="contactForm?.focusNameField"
				>
					talk to me
					<IconArrow class="mx-2 h-5 w-5" />
				</Button>
				<p class="text-foreground/50">________or________</p>
				<Button
					variant="blank"
					class="font-sans font-medium"
					@click="emailToClipboard"
				>
					ryanvoitiskis@pm.me
					<IconClipboardCopy class="mx-2 h-5 w-5" />
				</Button>
			</div>
			<ContactForm ref="contactForm" class="w-full max-w-screen-xs" />
		</div>
	</main>
</template>
