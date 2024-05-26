export interface HeadItems {
	title?: string
	meta?: {
		name?: string
		property?: string
		content: string
	}[]
	link?: {
		rel: string
		href: string
		imagesrcset?: string
		as?: string
	}[]
	style?: {
		cssText: string
	}[]
	script?: {
		src?: string
		innerHTML?: string
	}[]
	noscript?: {
		innerHTML: string
	}[]
}

export function renderHeadItems(headItems: HeadItems[]): string {
	const items = mergeHeadItems(headItems)
	// TODO: dedupe meta tags
	validateHeadItems(items)

	const tags: string[] = []

	tags.push(`<title>${items.title}</title>`)

	if (items.meta)
		items.meta.forEach((meta) => {
			const attrs = Object.entries(meta)
				.map(([key, value]) => `${key}="${value}"`)
				.join(' ')
			tags.push(`<meta ${attrs}>`)
		})

	if (items.link)
		items.link.forEach((link) => {
			const attrs = Object.entries(link)
				.map(([key, value]) => `${key}="${value}"`)
				.join(' ')
			tags.push(`<link ${attrs}>`)
		})

	if (items.style)
		items.style.forEach((style) => {
			tags.push(`<style>${style.cssText}</style>`)
		})

	if (items.script)
		items.script.forEach((script) => {
			const attrs = script.src ? `src="${script.src}"` : ''
			tags.push(`<script ${attrs}>${script.innerHTML || ''}</script>`)
		})

	if (items.noscript)
		items.noscript.forEach((noscript) => {
			tags.push(`<noscript>${noscript.innerHTML}</noscript>`)
		})

	return tags.join('\n')
}

function mergeHeadItems(headItems: HeadItems[]): HeadItems {
	const mergedHeadItems: HeadItems = {
		title: '',
		meta: [],
		link: [],
		style: [],
		script: [],
		noscript: []
	}

	headItems.forEach((item) => {
		if (item.title && item.title.length) mergedHeadItems.title = item.title
		if (item.meta) mergedHeadItems.meta?.push(...item.meta)
		if (item.link) mergedHeadItems.link?.push(...item.link)
		if (item.style) mergedHeadItems.style?.push(...item.style)
		if (item.script) mergedHeadItems.script?.push(...item.script)
		if (item.noscript) mergedHeadItems.noscript?.push(...item.noscript)
	})

	return mergedHeadItems
}

function validateHeadItems(headItems: HeadItems) {
	if (!headItems.title || !headItems.title.length)
		throw new Error('Missing title tag in head.')
}

// TODO: better error messages - ideally inc page name 'in index.astro' or 'on page /foo'
