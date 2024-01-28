// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	telemetry: false,
	modules: [
		'@nuxt/content',
		'@nuxtjs/tailwindcss',
		'@nuxtjs/eslint-module',
		'@vueuse/nuxt'
	],
	css: [
		'~/assets/styles/base.scss',
		'~/assets/styles/typography.scss',
		'~/assets/styles/dimensions.scss',
		'~/assets/styles/light-theme.scss',
		'~/assets/styles/dark-theme.scss',
		'~/assets/styles/prism-custom.scss'
	]
})
