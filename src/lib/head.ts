const DEFAULT_CHARSET = { charset: 'UTF-8' }
const DEFAULT_VIEWPORT = { content: 'width=device-width, initial-scale=1' }

export interface HeadItems {
	title?: string
	meta?: {
		name?: string
		property?: string
		content?: string
		charset?: string
	}[]
	link?: {
		rel: string
		href: string
		imagesrcset?: string
		as?: string
		type?: string
		crossorigin?: string
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

/*
	there is no limit to the number of HeadItems objects that can be passed in to 
	the function. later objects will override earlier objects in the case of 
	duplicates. for this reason, order global first, then page specific in the [].
*/
export function renderHeadItems(headItems: HeadItems[]): string {
	const items = mergeHeadItems(headItems)
	validateHeadItems(items)

	const tags: string[] = []

	const charset = items.meta?.filter((i) => i.charset).at(-1) || DEFAULT_CHARSET
	tags.push(`<meta charset="${charset.charset}">`)

	const viewport =
		items.meta?.filter((i) => i.name === 'viewport').at(-1) || DEFAULT_VIEWPORT
	tags.push(`<meta name="viewport" content="${viewport.content}">`)

	tags.push(`<title>${items.title}</title>`)

	const unhandledMetaItems = items.meta?.filter(
		(i) => i.property || (i.name && i.name !== 'viewport')
	)
	if (unhandledMetaItems?.length)
		unhandledMetaItems.forEach((meta) => {
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

	mergedHeadItems.meta = deduplicateMetaTags(mergedHeadItems.meta)

	return mergedHeadItems
}

function deduplicateMetaTags(metaTags: HeadItems['meta']): HeadItems['meta'] {
	const metaMap = new Map<
		string,
		{ name?: string; property?: string; content?: string }
	>()

	metaTags?.forEach((meta) => {
		const key = meta.property || meta.name
		if (key) metaMap.set(key, meta)
	})

	return Array.from(metaMap.values())
}

function validateHeadItems(headItems: HeadItems) {
	if (!headItems.title || !headItems.title.length)
		throw new Error('Missing title tag in head.')
}

// TODO: better error messages - ideally inc page name 'in index.astro' or 'on page /foo'
