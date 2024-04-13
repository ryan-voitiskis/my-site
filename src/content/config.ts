import { z, defineCollection } from 'astro:content'

const blogCollection = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			format: z.string(),
			published: z.string(),
			updated: z.string().optional(),
			short: z.string(),
			cover: image(),
			coverAlt: z.string(),
			readingTime: z.string().optional(),
			images: z
				.array(
					z.object({
						src: z.string(),
						alt: z.string()
					})
				)
				.optional(),
			tags: z.array(z.string()).optional()
		})
})

export const collections = {
	blog: blogCollection
}
