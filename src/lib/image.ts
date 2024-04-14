import type { GetImageResult } from 'astro'
import { getImage } from 'astro:assets'

export type OptimisedImg = GetImageResult & {
	alt: string
}

export async function optimiseImages(
	images: { src: ImageMetadata; alt: string }[]
): Promise<OptimisedImg[]> {
	return Promise.all(
		images.map(async (img) => ({
			...(await getImage({ src: img.src, format: 'webp' })),
			alt: img.alt
		}))
	)
}
