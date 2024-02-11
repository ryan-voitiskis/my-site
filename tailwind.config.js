/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: [
		'./components/**/*.{js,vue,ts}',
		'./content/**/*.md',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./app.vue',
		'./error.vue'
	],
	theme: {
		extend: {
			colors: {
				'page-bg': 'var(--page-bg)',
				'alt-bg': 'var(--alt-bg)',
				'alt-alt-bg': 'var(--alt-alt-bg)',
				'theme-toggle-bg': 'var(--theme-toggle-bg)',
				primary: 'var(--primary)',
				secondary: 'var(--secondary)',
				hr: 'var(--hr)',
				'modal-backdrop': 'var(--modal-backdrop)',
				'correct-green': 'var(--correct-green)',
				text: 'var(--text)',
				'text-strong': 'var(--text-strong)',
				'text-soft': 'var(--text-soft)',
				'heading-text': 'var(--heading-text)',
				'nav-text': 'var(--nav-text)',
				'nav-text-hover': 'var(--nav-text-hover)',
				'nav-underline': 'var(--nav-underline)',
				'link-text': 'var(--link-text)',
				'link-hover': 'var(--link-hover)',
				'project-link-text': 'var(--project-link-text)',
				'abbr-title': 'var(--abbr-title)',
				'side-note-bg': 'var(--side-note-bg)',
				'side-note-text': 'var(--side-note-text)',
				'marker-color': 'var(--marker-color)',
				separator: 'var(--separator)',
				'button-active-text': 'var(--button-active-text)',
				'gallery-ui': 'var(--gallery-ui)',
				'gallery-ui-hover': 'var(--gallery-ui-hover)'
			}
		},
		screens: {
			xs: '475px',
			...defaultTheme.screens
		},
		fontFamily: {
			sans: ['Urbanist', 'sans-serif'],
			serif: ['Crimson Pro', 'serif'],
			mono: ['Xenon', 'monospace']
		}
	},
	plugins: [],
	darkMode: 'class'
}
