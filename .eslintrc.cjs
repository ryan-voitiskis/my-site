module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	extends: ['@nuxt/eslint-config'],
	rules: {
		'vue/html-indent': ['error', 'tab']
	}
}
