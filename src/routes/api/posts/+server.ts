import { fetchMarkdownPosts } from '$lib/utils'
import { json } from '@sveltejs/kit'

export const GET = async () => {
	const allPosts = await fetchMarkdownPosts()
	const sortedPosts = allPosts.sort((a, b) => {
		return Date.parse(b.metadata.date) - Date.parse(a.metadata.date)
	})

	return json(sortedPosts)
}
