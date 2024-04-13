import type { GetImageResult } from 'astro'

export type OptimisedImg = GetImageResult & {
	alt: string
}
