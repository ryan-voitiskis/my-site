import { defineCollection, z } from 'astro:content'

const blogCollection = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z
			.object({
				title: z.string(),
				format: z.string(),
				published: z.string(),
				updated: z.string().optional(),
				short: z.string(),
				cover: image().optional(),
				coverAlt: z.string().optional(),
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
			.refine((data) => !(data.cover && !data.coverAlt), {
				message: 'coverAlt is required when cover is present',
				path: ['coverAlt']
			})
})

export const collections = {
	blog: blogCollection
}
