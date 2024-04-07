import { z, defineCollection } from 'astro:content'

// TODO: after testing astro v nuxt perf, separate into article, image_collection + future types
// TODO: after that, remove optional from images
const blogCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		format: z.string(),
		published: z.string(),
		updated: z.string().optional(),
		short: z.string(),
		image: z.string(),
		image_alt: z.string(),
		reading_time: z.string().optional(),
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
