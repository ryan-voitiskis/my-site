const DEFAULT_CHARSET = { charset: 'UTF-8' }
const DEFAULT_VIEWPORT = { content: 'width=device-width, initial-scale=1' }

type TagName = 'meta' | 'link' | 'style' | 'script' | 'noscript'

type BaseItem = {
	[key: string]: any
	priority?: number
}

type ContentItem = BaseItem & {
	innerHTML: string
}

type Tag = (BaseItem | ContentItem) & {
	tagName: TagName
}

type PrioritisedTag = Tag & {
	priority: number
}

export type HeadItems = {
	title?: string
	meta?: BaseItem[]
	link?: BaseItem[]
	style?: ContentItem[]
	script?: ContentItem[]
	noscript?: ContentItem[]
}

type MergedHeadItems = Required<HeadItems>

/*
	// TODO: move this to README
  there is no limit to the number of HeadItems objects that can be passed in to 
  the function. later objects will override earlier objects in the case of 
  duplicates. for this reason, order global first, then page specific in the [].
*/
export function renderHeadItems(headItems: HeadItems[]): string {
	const items = mergeHeadItems(headItems)
	validateHeadItems(items)

	const tags: Tag[] = []
	const tagNames: TagName[] = ['meta', 'link', 'style', 'script', 'noscript']
	tagNames.forEach((tag) => {
		tags.push(...items[tag].map((item) => ({ ...item, tagName: tag })))
	})

	let prioritisedTags = applyDefaultPriorities(tags)
	prioritisedTags = applyDefaultTags(prioritisedTags)

	const orderedTags = prioritisedTags.sort((a, b) => a.priority - b.priority)

	const preTitleTags = orderedTags
		.filter((i) => i.priority < 0)
		.map((item) => renderHeadTag(item))
	const postTitleTags = orderedTags
		.filter((i) => i.priority > 0)
		.map((item) => renderHeadTag(item))

	return [
		...preTitleTags,
		`<title>${items.title}</title>`,
		...postTitleTags
	].join('\n')
}

function mergeHeadItems(headItems: HeadItems[]): MergedHeadItems {
	const mergedHeadItems = {
		title: '',
		meta: [] as BaseItem[],
		link: [] as BaseItem[],
		style: [] as ContentItem[],
		script: [] as ContentItem[],
		noscript: [] as ContentItem[]
	}

	headItems.forEach((item) => {
		if (item.title && item.title.length) mergedHeadItems.title = item.title
		if (item.meta) mergedHeadItems.meta.push(...item.meta)
		if (item.link) mergedHeadItems.link.push(...item.link)
		if (item.style) mergedHeadItems.style.push(...item.style)
		if (item.script) mergedHeadItems.script.push(...item.script)
		if (item.noscript) mergedHeadItems.noscript.push(...item.noscript)
	})

	// TODO [later]: consider moving deduplication to the parent function
	mergedHeadItems.meta = deduplicateMetaItems(mergedHeadItems.meta)

	return mergedHeadItems
}

function applyDefaultPriorities(tags: Tag[]): PrioritisedTag[] {
	const prioritisedTags: PrioritisedTag[] = []
	const unprioritisedTags: Tag[] = []

	tags.forEach((tag) => {
		if (tag.priority !== undefined) prioritisedTags.push(tag as PrioritisedTag)
		else unprioritisedTags.push(tag)
	})

	unprioritisedTags.forEach((tag) => {
		let priority: number
		switch (tag.tagName) {
			case 'meta':
				if (tag.charset) priority = -3
				else if (tag.name === 'viewport') priority = -2
				else if (tag['http-equiv']) priority = -1
				else priority = 100
				break

			case 'link':
				if (tag.rel === 'preconnect') priority = 10
				else if (tag.rel === 'preload') priority = 60
				else if (tag.rel === 'prefetch') priority = 80
				else if (tag.rel === 'stylesheet') priority = 50
				else priority = 90
				break

			case 'style':
				priority = tag.innerHTML.includes('@import') ? 30 : 51
				break

			case 'script':
				if (tag.async) priority = 20
				else if (tag.defer) priority = 70
				else priority = 40
				break

			default:
				priority = 300
		}
		prioritisedTags.push({ ...tag, priority })
	})

	return prioritisedTags
}

function applyDefaultTags(tags: PrioritisedTag[]): PrioritisedTag[] {
	if (!tags.some((tag) => tag.tagName === 'meta' && tag.charset))
		tags.push({ ...DEFAULT_CHARSET, tagName: 'meta', priority: -3 })

	if (!tags.some((tag) => tag.tagName === 'meta' && tag.name === 'viewport'))
		tags.push({ ...DEFAULT_VIEWPORT, tagName: 'meta', priority: -2 })

	return tags
}

function deduplicateMetaItems(metaItems: BaseItem[]): BaseItem[] {
	const metaMap = new Map<string, BaseItem>()

	metaItems.forEach((meta) => {
		const key = meta.property || meta.name || meta['http-equiv']
		if (key) metaMap.set(key, meta)
	})

	return Array.from(metaMap.values())
}

function renderHeadTag(item: BaseItem | ContentItem): string {
	const attrs = renderAttrs(item)
	return ['meta', 'link'].includes(item.tagName)
		? `<${item.tagName} ${attrs} />`
		: `<${item.tagName}${attrs && ' '}${attrs}>${item.innerHTML}</${item.tagName}>`
}

// TODO: test formatting of attr and <tag attr="" attr />{innerHTML}</tag>
// TODO: also test no more than one space between attrs
// TODO: remove priority before rendering
function renderAttrs(item: BaseItem | ContentItem): string {
	return Object.entries(item)
		.filter(([key]) => !['innerHTML', 'priority', 'tagName'].includes(key))
		.map(([key, value]) => {
			if (typeof value === 'boolean') return value ? key : ''
			else return `${key}="${value}"`
		})
		.filter((attr) => attr !== '')
		.join(' ')
}

function validateHeadItems(headItems: HeadItems) {
	// TODO: better error messages - ideally inc page name 'in index.astro' or 'on page /foo'
	if (!headItems.title || !headItems.title.length)
		throw new Error('Missing title tag in head.')
}
