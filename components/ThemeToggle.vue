<script setup lang="ts">
const colorMode = useColorMode()
const state = ref(undefined as boolean | undefined)

watch(state, (val) => (colorMode.preference = val ? 'dark' : 'light'))
onMounted(() => (state.value = colorMode.preference === 'dark' ? true : false))
</script>

<template>
	<Toggle v-model:pressed="state" size="icon" variant="theme">
		<IconSun v-if="state === false" class="h-6 w-6" />
		<IconMoon v-else-if="state === true" class="h-6 w-6" />
	</Toggle>
</template>
