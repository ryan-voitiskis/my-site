// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	telemetry: false,
	modules: [
		'@nuxt/content',
		'@nuxtjs/eslint-module',
		'@vueuse/nuxt',
		'@nuxtjs/color-mode'
	],
	css: [
		'~/assets/css/main.scss',
		'~/assets/css/themes.scss',
		'~/assets/css/shiki-custom.scss'
	],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {}
		}
	},
	content: {
		highlight: {
			theme: {
				default: 'github-light',
				dark: 'github-dark'
			}
		}
	},
	colorMode: {
		preference: 'light',
		fallback: 'light',
		hid: 'nuxt-color-mode-script',
		globalName: '__NUXT_COLOR_MODE__',
		componentName: 'ColorScheme',
		classPrefix: '',
		classSuffix: '',
		storageKey: 'nuxt-color-mode'
	},
	components: [{ path: '~/components/content', global: true }],
	app: {
		head: {
			meta: [],
			link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
			style: [],
			script: [],
			noscript: []
		}
	}
})