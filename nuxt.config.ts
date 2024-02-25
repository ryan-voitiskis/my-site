export default defineNuxtConfig({
	devtools: { enabled: true },
	telemetry: false,
	alias: {
		'~': '/',
		types: '/types/',
		assets: '/assets/',
		components: '/components',
		utils: '/utils/'
	},
	modules: [
		'@nuxt/content',
		'@nuxtjs/eslint-module',
		'@vueuse/nuxt',
		'@nuxtjs/color-mode',
		'shadcn-nuxt'
	],
	shadcn: {
		prefix: '',
		componentDir: './components/ui'
	},
	css: [
		'assets/css/themes.scss',
		'assets/css/main.scss',
		'assets/css/shiki.scss'
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
				// can't add custom themes yet
				// https://github.com/nuxt/content/issues/2398
				// TODO: add monokai machine theme when possible
				dark: 'dracula'
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
