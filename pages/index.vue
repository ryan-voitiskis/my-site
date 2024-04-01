<script setup lang="ts">
import { toast } from 'vue-sonner'

const description = 'developer from melbourne, au. fullstack, mostly with js.'
const title = 'ryan voitiskis - about'
const url = 'https://ryanvoitiskis.com'
useHead({
	title: title,
	meta: [
		{ name: 'description', content: description },
		{ property: 'og:title', content: title },
		{ property: 'og:description', content: description },
		{ property: 'og:url', content: url },
		{ property: 'twitter:card', content: 'summary' },
		{ property: 'twitter:title', content: title },
		{ property: 'twitter:description', content: description }
	],
	link: [{ rel: 'canonical', href: url }]
})

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
		<div class="mx-auto w-full max-w-[1120px] px-4">
			<h1 class="font-mono text-sm font-[120] text-muted-foreground">
				> ryan_voitiskis
			</h1>
		</div>
		<div
			class="mx-auto flex w-full flex-col items-center justify-center gap-8 pb-48 pt-12 md:flex-row"
		>
			<div class="w-full max-w-64 text-sm text-muted-foreground">
				<p class="mb-2">developer from melbourne, au</p>
				<p class="mb-2">fullstack, mostly with js</p>
			</div>
			<Button
				variant="blank"
				class="font-sans font-medium"
				@click="emailToClipboard"
			>
				ryanvoitiskis@pm.me
				<IconClipboardCopy class="mx-2 h-5 w-5" />
			</Button>
		</div>
	</main>
</template>
