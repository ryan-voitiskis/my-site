import type PostData from '$lib/types/PostData'

export const fetchMarkdownPosts = async () => {
	const allPostFiles = import.meta.glob('/src/routes/blog/*.md')
	const iterablePostFiles = Object.entries(allPostFiles)

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const post = (await resolver()) as PostData
			const postPath = path.slice(11, -3)

			return {
				metadata: post.metadata,
				path: postPath
			}
		})
	)

	return allPosts
}
