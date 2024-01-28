<script setup lang="ts">
const darkTheme = ref(false)

const setDarkTheme = () => {
	document.documentElement.classList.add('dark')
	document.documentElement.classList.remove('light')
}

const setLightTheme = () => {
	document.documentElement.classList.add('light')
	document.documentElement.classList.remove('dark')
}

watch(darkTheme, (newValue) => {
	if (newValue) {
		setDarkTheme()
	} else {
		setLightTheme()
	}
})

onMounted(() => {
	darkTheme.value = window.matchMedia('(prefers-color-scheme: dark)').matches
})
</script>

<template>
	<label class="theme-toggle">
		<input v-model="darkTheme" type="checkbox" />
		<span class="control" />
	</label>
</template>

<style lang="scss">
.theme-toggle {
	--toggle-width: 44px;
	--toggle-height: 28px;
	--gutter: 2px;
	--toggle-radius: calc(var(--toggle-height) / 2);
	--theme-toggle-size: calc(var(--toggle-height) - (var(--gutter) * 2));

	cursor: pointer;
	display: block;
	font-size: 22px;
	margin-top: -28px;
	padding-left: var(--toggle-width);
	position: relative;
	user-select: none;

	input {
		position: absolute;
		height: 0;
		opacity: 0;
		width: 0;
	}

	input:checked ~ .control {
		&:after {
			left: calc(
				var(--toggle-width) - var(--theme-toggle-size) - var(--gutter)
			);
			background-image: url('$lib/svg/moon.svg');
		}
	}

	.control {
		position: absolute;
		top: 0;
		left: 0;
		height: var(--toggle-height);
		width: var(--toggle-width);
		border-radius: calc(var(--toggle-height) / 2);
		background-color: var(--theme-toggle-bg);
		transition: background-color 200ms;

		&:after {
			content: '';
			background-image: url('$lib/svg/sun.svg');
			background-size: 24px 24px;
			background-color: var(--page-bg);
			position: absolute;
			left: var(--gutter);
			top: var(--gutter);
			width: var(--theme-toggle-size);
			height: var(--theme-toggle-size);
			border-radius: calc(var(--toggle-height) / 2);
			transition:
				left 200ms ease-in,
				background-color 200ms ease-in;
		}
	}
}
</style>
