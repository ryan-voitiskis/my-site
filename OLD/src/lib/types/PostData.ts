export default interface Post {
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
