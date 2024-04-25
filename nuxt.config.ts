export default defineNuxtConfig({
	devtools: { enabled: false },
	telemetry: false,
	modules: [
		'@nuxt/content',
		'@nuxt/image',
		'@nuxtjs/color-mode',
		'@nuxtjs/eslint-module',
		'@vee-validate/nuxt',
		'@vueuse/nuxt',
		'shadcn-nuxt'
	],
	shadcn: {
		prefix: '',
		componentDir: './components/ui'
	},
	css: ['~/assets/css/main.scss', '~/assets/css/shiki.scss'],
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
			htmlAttrs: { lang: 'en' },
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
			meta: [
				{ property: 'og:type', content: 'website' },
				{ property: 'twitter:site', content: '@ryanvoitiskis' },
				{ property: 'twitter:creator', content: '@ryanvoitiskis' }
			],
			link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]
		}
	}
})
