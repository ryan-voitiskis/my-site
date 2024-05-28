const DEFAULT_CHARSET = { charset: 'UTF-8' }
const DEFAULT_VIEWPORT = { content: 'width=device-width, initial-scale=1' }

interface MetaItem {
	name?: string
	property?: string
	'http-equiv'?: string
	content?: string
	charset?: string
}

interface LinkItem {
	rel: string
	href: string
	imagesrcset?: string
	as?: string
	type?: string
	crossorigin?: string
}

interface StyleItem {
	cssText: string
}

interface ScriptItem {
	src?: string
	innerHTML?: string
}

interface NoScriptItem {
	innerHTML: string
}

export interface HeadItems {
	title?: string
	meta?: MetaItem[]
	link?: LinkItem[]
	style?: StyleItem[]
	script?: ScriptItem[]
	noscript?: NoScriptItem[]
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

	const httpEquivMeta = items.meta?.filter((i) => i['http-equiv'])
	if (httpEquivMeta?.length)
		httpEquivMeta.forEach((meta) => {
			const attrs = Object.entries(meta)
				.map(([key, value]) => `${key}="${value}"`)
				.join(' ')
			tags.push(`<meta ${attrs}>`)
		})

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
	const mergedHeadItems = {
		title: '',
		meta: [] as MetaItem[],
		link: [] as LinkItem[],
		style: [] as StyleItem[],
		script: [] as ScriptItem[],
		noscript: [] as NoScriptItem[]
	}

	headItems.forEach((item) => {
		if (item.title && item.title.length) mergedHeadItems.title = item.title
		if (item.meta) mergedHeadItems.meta.push(...item.meta)
		if (item.link) mergedHeadItems.link.push(...item.link)
		if (item.style) mergedHeadItems.style.push(...item.style)
		if (item.script) mergedHeadItems.script.push(...item.script)
		if (item.noscript) mergedHeadItems.noscript.push(...item.noscript)
	})

	mergedHeadItems.meta = deduplicateMetaItems(mergedHeadItems.meta)

	return mergedHeadItems
}

function deduplicateMetaItems(metaItems: MetaItem[]): MetaItem[] {
	const metaMap = new Map<string, Omit<MetaItem, 'charset'>>()

	metaItems?.forEach((meta) => {
		const key = meta.property || meta.name || meta['http-equiv']
		if (key) metaMap.set(key, meta)
	})

	return Array.from(metaMap.values())
}

function validateHeadItems(headItems: HeadItems) {
	if (!headItems.title || !headItems.title.length)
		throw new Error('Missing title tag in head.')
}

// TODO: better error messages - ideally inc page name 'in index.astro' or 'on page /foo'
