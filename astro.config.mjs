import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue'
import tailwind from '@astrojs/tailwind'
import githubLightCustom from './themes/github-light-custom.json'

export default defineConfig({
	integrations: [
		vue(),
		tailwind({
			applyBaseStyles: false
		})
	],
	output: 'static',
	markdown: {
		shikiConfig: {
			themes: {
				light: githubLightCustom,
				dark: 'dracula' // TODO: custom dark
			}
		}
	}
})
