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
				displayCoverInArticle: z.boolean().optional(),
				maxWidth: z.number().optional(),
				readingTime: z.string().optional(),
				tags: z.array(z.string()).optional()
			})
			.refine((data) => !(data.cover && !data.coverAlt), {
				message: 'coverAlt is required when cover is present',
				path: ['coverAlt']
			})
			.refine((data) => !(data.displayCoverInArticle && !data.cover), {
				message: 'cover is required when displayCoverInArticle is true',
				path: ['cover']
			})
})

export const collections = {
	blog: blogCollection
}
