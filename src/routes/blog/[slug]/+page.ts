import type { PageLoad } from './$types'

// todo: catch errors
export const load = (async ({ params }) => {
	const post = await import(`../${params.slug}.md`)
	const title = post.metadata.title
	const published = post.metadata.published
	const updated = post.metadata.updated
	const content = post.default
	return { title, published, updated, content }
}) satisfies PageLoad
