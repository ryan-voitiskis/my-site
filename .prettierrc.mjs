/** @type {import("prettier").Config} */
export default {
	useTabs: true,
	singleQuote: true,
	trailingComma: 'none',
	tabWidth: 2,
	semi: false,
	plugins: [
		'prettier-plugin-astro',
		'@trivago/prettier-plugin-sort-imports',
		'prettier-plugin-tailwindcss' // MUST come last
	],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
				astroAllowShorthand: true
			}
		}
	],
	importOrder: [
		'<THIRD_PARTY_MODULES>',
		'^@/(?!assets/)(.*)$', // any @/... imports that are not assets
		'^[./]', // ./ or ../ imports
		'^@/assets/(.*)$' // assets imports
	],
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
	tailwindFunctions: ['clsx', 'cva', 'cn']
}
