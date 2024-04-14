/** @type {import("prettier").Config} */
export default {
	useTabs: true,
	singleQuote: true,
	trailingComma: 'none',
	tabWidth: 2,
	semi: false,
	plugins: [
		'prettier-plugin-astro',
		'prettier-plugin-tailwindcss',
		'@trivago/prettier-plugin-sort-imports'
	],
	overrides: [
		{
			files: '*.astro',
			options: { parser: 'astro' }
		}
	],
	importOrder: [
		'<THIRD_PARTY_MODULES>',
		'^@/(?!assets/)(.*)$', // any @/... imports that are not assets
		'^[./]', // ./ or ../ imports
		'^@/assets/(.*)$' // assets imports
	],
	importOrderSeparation: true,
	importOrderSortSpecifiers: true
}
