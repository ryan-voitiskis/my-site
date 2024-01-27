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
		'no-mixed-spaces-and-tabs': 'off'
	}
}
