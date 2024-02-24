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
				bg: 'var(--bg)',
				'bg-alt': 'var(--bg-alt)',
				'bg-alt-alt': 'var(--bg-alt-alt)',
				'bg-toggle': 'var(--bg-toggle)',
				primary: 'var(--primary)',
				secondary: 'var(--secondary)',
				hr: 'var(--hr)',
				backdrop: 'var(--backdrop)',
				positive: 'var(--positive)',
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
				'bg-side-note': 'var(--bg-side-note)',
				'side-note-text': 'var(--side-note-text)',
				marker: 'var(--marker)',
				separator: 'var(--separator)',
				'text-active': 'var(--text-active)',
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
