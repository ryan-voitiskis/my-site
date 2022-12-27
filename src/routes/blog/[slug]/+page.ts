import type { PageLoad } from './$types'

// todo: catch errors
export const load = (async ({ params }) => {
	const post = await import(`../${params.slug}.md`)
	const title = post.metadata.title
	const date = post.metadata.date
	const content = post.default
	return { title, date, content }
}) satisfies PageLoad
