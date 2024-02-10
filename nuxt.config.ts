// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	telemetry: false,
	modules: [
		'@nuxt/content',
		'@nuxtjs/tailwindcss',
		'@nuxtjs/eslint-module',
		'@vueuse/nuxt',
		'@nuxtjs/color-mode'
	],
	css: [
		'~/assets/styles/base.scss',
		'~/assets/styles/typography.scss',
		'~/assets/styles/dimensions.scss',
		'~/assets/styles/light-theme.scss',
		'~/assets/styles/dark-theme.scss',
		'~/assets/styles/prism-custom.scss'
	],
	content: {
		highlight: {
			theme: {
				default: 'github-light',
				dark: 'github-dark'
			}
		}
	},
	colorMode: {
		preference: 'light', // default value of $colorMode.preference
		fallback: 'light', // fallback value if not system preference found
		hid: 'nuxt-color-mode-script',
		globalName: '__NUXT_COLOR_MODE__',
		componentName: 'ColorScheme',
		classPrefix: '',
		classSuffix: '',
		storageKey: 'nuxt-color-mode'
	},
	components: [{ path: '~/components/content', global: true }]
})
