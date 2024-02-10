/** @type {import('tailwindcss').Config} */

console.log('tailwind.config.js')
module.exports = {
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./app.vue',
		'./error.vue'
	],
	theme: {
		extend: {}
	},
	plugins: [],
	darkMode: 'class'
}
