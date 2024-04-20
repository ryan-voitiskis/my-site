import type { GetImageResult, ImageMetadata } from 'astro'
import { getImage } from 'astro:assets'

export type OptimisedImage = GetImageResult & { attributes: { alt: string } }

export type OptimisedGallery = {
	preview: OptimisedImage
	full: OptimisedImage
}[]

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

export async function optimiseGallery(
	images: { src: ImageMetadata; alt: string; isLCP?: boolean }[]
): Promise<OptimisedGallery> {
	try {
		return await Promise.all(
			images.map(async ({ src, alt, isLCP }) => {
				const preview = await getImage({
					src,
					format: 'webp',
					quality: 80,
					width: 512,
					height: 512
				})
				const full = await getImage({ src, format: 'webp' })
				return {
					preview: {
						...preview,
						attributes: {
							...preview.attributes,
							alt,
							loading: isLCP ? 'eager' : preview.attributes.loading,
							fetchpriority: isLCP ? 'high' : 'low'
						}
					},
					full: {
						...full,
						attributes: {
							...full.attributes,
							alt,
							loading: 'lazy'
						}
					}
				}
			})
		)
	} catch (error) {
		console.error('Error optimising image gallery:', error)
		throw error
	}
}
