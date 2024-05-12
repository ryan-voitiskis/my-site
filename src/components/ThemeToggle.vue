<script setup lang="ts">
// only toggles 'dark' class in <html> element classList
// see @/lib/persistTheme.js for rest of implementation
import { onMounted, ref, watch } from 'vue'

import IconMoon from '@/components/icons/IconMoon.vue'
import IconSun from '@/components/icons/IconSun.vue'
import { Toggle } from '@/components/ui/toggle'

const isDark = ref(false)

onMounted(
	() => (isDark.value = document.documentElement.classList.contains('dark'))
)

watch(isDark, (val) => document.documentElement.classList.toggle('dark', val))
</script>

<template>
	<Toggle
		v-model:pressed="isDark"
		size="icon"
		variant="theme"
		aria-label="Toggle dark mode"
	>
		<IconSun class="block dark:hidden h-6 w-6" />
		<IconMoon class="hidden dark:block h-6 w-6" />
	</Toggle>
</template>
