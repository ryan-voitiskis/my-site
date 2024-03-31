<script setup lang="ts">
import { defineProps, onMounted, ref } from 'vue'
import { Button } from '@/components/ui/button'

defineProps<{
	href: string
	label: string
}>()

const pathname = ref(null as string | null)

onMounted(() => (pathname.value = window.location.pathname))
</script>

<template>
	<Button
		as-child
		variant="nav-link"
		class="-my-4 hover:no-underline !decoration-primary !decoration-[0.1rem]"
		:class="{ '!underline': pathname === href }"
	>
		<a :href="href">{{ label }}</a>
	</Button>
</template>
