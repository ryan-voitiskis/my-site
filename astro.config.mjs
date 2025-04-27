import mdx from '@astrojs/mdx'
import netlify from '@astrojs/netlify'
import sitemap from '@astrojs/sitemap'
import vue from '@astrojs/vue'
import tailwindcss from '@tailwindcss/vite'
import expressiveCode from 'astro-expressive-code'
import { defineConfig } from 'astro/config'

import githubLightCustom from './themes/github-light-custom.json'

export default defineConfig({
	site: 'https://ryanvoitiskis.com/',
	output: 'static',
	trailingSlash: 'never',
	prefetch: { prefetchAll: true },
	adapter: netlify(),
	vite: {
		plugins: [tailwindcss()]
	},
	integrations: [
		vue(),
		expressiveCode({
			themes: [githubLightCustom, 'github-dark'],
			themeCssSelector: (theme) =>
				`[class="${theme.name === 'github-dark' ? 'dark' : 'light'}"]`,
			useDarkModeMediaQuery: false,
			styleOverrides: {
				borderColor: 'hsl(var(--border))',
				borderRadius: '8px',
				borderWidth: '1px',
				codeFontFamily: 'BerkeleyMono, monospace',
				codeFontWeight: '110',
				codeFontSize: '0.875rem',
				uiFontFamily: 'BerkeleyMono, monospace',
				uiFontWeight: '100',
				frames: {
					editorActiveTabBackground: ({ theme }) =>
						theme.colors['editor.background'],
					editorTabBarBorderBottomColor: 'hsl(var(--border))',
					editorTabBarBackground: 'hsl(var(--vmuted))',
					editorActiveTabIndicatorTopColor: 'transparent',
					editorActiveTabIndicatorBottomColor: ({ theme }) =>
						theme.colors['editor.background'],
					terminalBackground: ({ theme }) => theme.colors['editor.background'],
					terminalTitlebarBackground: 'hsl(var(--vmuted))',
					terminalTitlebarBorderBottomColor: 'hsl(var(--border))',
					tooltipSuccessBackground: 'hsl(var(--primary))',
					tooltipSuccessForeground: 'hsl(var(--primary-foreground))',
					frameBoxShadowCssValue: 'none'
				}
			}
		}),
		mdx(),
		sitemap()
	],
	markdown: {
		shikiConfig: {
			themes: {
				light: githubLightCustom,
				dark: 'github-dark' // TODO: custom dark
			}
		}
	}
})
