export type ImageAttrs = {
	src: string
	alt: string
}

export type Post = {
	metadata: {
		title: string
		format: string
		published: string
		updated?: string
		short?: string
		image?: string
		image_alt?: string
	}
	default: string
}

export type Project = {
	metadata: {
		title: string
		url: string
	}
	default: string
}
