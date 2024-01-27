import type { PageLoad } from './$types'

export const load = (async ({ params }) => {
	const post = await import(`../${params.slug}.md`)
	const title = post.metadata.title
	const published = post.metadata.published
	const updated = post.metadata.updated
	const format = post.metadata.format
	const content = post.default
	return { title, published, updated, format, content }
}) satisfies PageLoad
