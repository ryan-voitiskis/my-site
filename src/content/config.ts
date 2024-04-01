import { z, defineCollection } from 'astro:content'

const blogCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		format: z.string(),
		published: z.string(),
		updated: z.string().optional(),
		short: z.string(),
		image: z.string().optional(),
		image_alt: z.string().optional(),
		reading_time: z.string().optional(),
		tags: z.array(z.string()).optional()
	})
})

export const collections = {
	blog: blogCollection
}
