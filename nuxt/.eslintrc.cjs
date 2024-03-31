module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	extends: ['@nuxt/eslint-config'],
	rules: {
		'vue/html-indent': ['error', 'tab'],
		'vue/singleline-html-element-content-newline': 'off',
		'vue/max-attributes-per-line': 'off',
		'no-mixed-spaces-and-tabs': 'off',
		'vue/component-tags-order': [
			'error',
			{
				order: [['script'], ['template'], ['style']]
			}
		],
		'vue/html-self-closing': 'off',
		'vue/require-default-prop': 'off',
		'@typescript-eslint/no-unused-vars': 'off'
	}
}
