import { fetchMarkdownPosts } from '$lib/utils'
import { json } from '@sveltejs/kit'

export const GET = async () => {
	const allPosts = await fetchMarkdownPosts()
	const sortedPosts = allPosts.sort((a, b) => {
		return Date.parse(b.metadata.published) - Date.parse(a.metadata.published)
	})

	return json(sortedPosts)
}
