export type ImageAttrs = {
	src: string
	alt: string
}

export type Post = {
	_path: string
	_dir: string
	_draft: boolean
	_partial: boolean
	_locale: string
	title: string
	description: string
	format: string
	published: string
	short: string
	image: string
	image_alt: string
	body: any // https://content.nuxt.com/usage/typescript TODO: when we have a better type for this
	reading_time?: string
	tags?: string[]
	_type: string
	_id: string
	_source: string
	_file: string
	_extension: string
}

export type Project = {
	metadata: {
		title: string
		url: string
	}
	default: string
}
