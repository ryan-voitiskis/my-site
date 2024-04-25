<script setup lang="ts">
// only toggles 'dark' class in <html> element classList
// see @/lib/persistTheme.js for rest of implementation
import { ref, watch } from 'vue'

import IconMoon from '@/components/icons/IconMoon.vue'
import IconSun from '@/components/icons/IconSun.vue'
import { Toggle } from '@/components/ui/toggle'

const state = ref(
	document.documentElement.classList.contains('dark') ? true : false
)

watch(state, (val) => document.documentElement.classList.toggle('dark', val))
</script>

<template>
	<Toggle
		v-model:pressed="state"
		size="icon"
		variant="theme"
		aria-label="Toggle light and dark mode"
	>
		<IconSun v-show="state === false" class="h-6 w-6" />
		<IconMoon v-show="state === true" class="h-6 w-6" />
	</Toggle>
</template>
