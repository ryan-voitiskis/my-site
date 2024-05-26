export interface HeadMeta {
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

export function renderHeadTags(headMeta: HeadMeta): string {
	if (!headMeta) return ''
	const tags: string[] = []

	if (headMeta.title) tags.push(`<title>${headMeta.title}</title>`)

	if (headMeta.meta)
		headMeta.meta.forEach((meta) => {
			const attrs = Object.entries(meta)
				.map(([key, value]) => `${key}="${value}"`)
				.join(' ')
			tags.push(`<meta ${attrs}>`)
		})

	if (headMeta.link)
		headMeta.link.forEach((link) => {
			const attrs = Object.entries(link)
				.map(([key, value]) => `${key}="${value}"`)
				.join(' ')
			tags.push(`<link ${attrs}>`)
		})

	if (headMeta.style)
		headMeta.style.forEach((style) => {
			tags.push(`<style>${style.cssText}</style>`)
		})

	if (headMeta.script)
		headMeta.script.forEach((script) => {
			const attrs = script.src ? `src="${script.src}"` : ''
			tags.push(`<script ${attrs}>${script.innerHTML || ''}</script>`)
		})

	if (headMeta.noscript)
		headMeta.noscript.forEach((noscript) => {
			tags.push(`<noscript>${noscript.innerHTML}</noscript>`)
		})

	return tags.join('\n')
}
