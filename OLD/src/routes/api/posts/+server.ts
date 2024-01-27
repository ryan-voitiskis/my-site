import { fetchMarkdownPosts } from '$lib/utils'
import { json } from '@sveltejs/kit'

export const GET = async () => {
	const posts = await fetchMarkdownPosts()
	// sort by date, if date is the same, then sort by title in reverse, then sort by format 'article' first
	const sortedPosts = posts
		.sort((a, b) => {
			if (a.metadata.published > b.metadata.published) {
				return -1
			} else if (a.metadata.published < b.metadata.published) {
				return 1
			} else {
				return a.metadata.title > b.metadata.title ? -1 : 1
			}
		})
		.sort((a, b) => {
			if (a.metadata.format === 'article' && b.metadata.format !== 'article') return -1
			if (a.metadata.format !== 'article' && b.metadata.format === 'article') return 1
			return 0
		})
	return json(sortedPosts)
}
