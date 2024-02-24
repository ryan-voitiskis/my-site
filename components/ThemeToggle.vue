<template>
	<label class="theme-toggle">
		<input
			v-model="$colorMode.preference"
			type="checkbox"
			true-value="dark"
			false-value="light"
		/>
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
			background-image: url('/moon.svg');
		}
	}

	.control {
		position: absolute;
		top: 0;
		left: 0;
		height: var(--toggle-height);
		width: var(--toggle-width);
		border-radius: calc(var(--toggle-height) / 2);
		background-color: var(--bg-toggle);
		transition: background-color 200ms;

		&:after {
			content: '';
			background-image: url('/sun.svg');
			background-size: 24px 24px;
			background-color: var(--bg);
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
