<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useColorMode } from '@vueuse/core'
import { Toggle } from '@/components/ui/toggle'
import IconSun from '@/components/icons/IconSun.vue'
import IconMoon from '@/components/icons/IconMoon.vue'

const mode = useColorMode()
const state = ref(undefined as boolean | undefined)

watch(state, (val) => (mode.value = val ? 'dark' : 'light'))
onMounted(() => (state.value = mode.value === 'dark' ? true : false))
</script>

<template>
	<Toggle
		v-model:pressed="state"
		size="icon"
		variant="theme"
		aria-label="Toggle light and dark mode"
	>
		<IconSun v-if="state === false" class="h-6 w-6" />
		<IconMoon v-else-if="state === true" class="h-6 w-6" />
	</Toggle>
</template>
