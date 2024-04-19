import type { GetImageResult, ImageMetadata } from 'astro'
import { getImage } from 'astro:assets'

export type OptimisedImage = GetImageResult & { attributes: { alt: string } }

export async function optimiseImages(
	images: { src: ImageMetadata; alt: string; isLCP?: boolean }[]
): Promise<OptimisedImage[]> {
	try {
		return await Promise.all(
			images.map(async ({ src, alt, isLCP }) => {
				const image = await getImage({ src, format: 'webp' })
				return {
					...image,
					attributes: {
						...image.attributes,
						alt,
						loading: isLCP ? 'eager' : image.attributes.loading,
						fetchpriority: isLCP ? 'high' : 'low'
					}
				}
			})
		)
	} catch (error) {
		console.error('Error optimising images:', error)
		throw error
	}
}
