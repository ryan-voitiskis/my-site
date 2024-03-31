<script lang="ts" setup>
import { Toaster as Sonner, type ToasterProps } from 'vue-sonner'

const props = defineProps<ToasterProps>()
</script>

<template>
	<Sonner
		class="toaster group"
		v-bind="props"
		:toast-options="{
			classes: {
				toast:
					'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg justify-center !shadow-foreground/20',
				title: '!font-[120] font-mono',
				description: 'group-[.toast]:text-muted-foreground',
				actionButton:
					'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
				cancelButton:
					'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground'
			}
		}"
	/>
</template>
