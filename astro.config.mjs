import mdx from '@astrojs/mdx'
import netlify from '@astrojs/netlify'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import vue from '@astrojs/vue'
import { defineConfig } from 'astro/config'

import githubLightCustom from './themes/github-light-custom.json'

export default defineConfig({
	site: 'https://ryanvoitiskis.com/',
	prefetch: {
		prefetchAll: true
	},
	integrations: [
		vue(),
		tailwind({
			applyBaseStyles: false
		}),
		mdx(),
		sitemap()
	],
	output: 'static',
	markdown: {
		shikiConfig: {
			themes: {
				light: githubLightCustom,
				dark: 'dracula' // TODO: custom dark
			}
		}
	},
	adapter: netlify()
})
