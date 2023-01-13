import { c as create_ssr_component, v as validate_component } from './index.js'
import { I as ImageGallery } from './ImageGallery.js'
const img1 = '/_app/immutable/assets/1-38aa663b.jpg'
const img2 = '/_app/immutable/assets/2-a184ca3c.jpg'
const img3 = '/_app/immutable/assets/3-57de630a.jpg'
const img4 = '/_app/immutable/assets/4-066436a7.jpg'
const img5 = '/_app/immutable/assets/5-a3f9cde7.jpg'
const img6 = '/_app/immutable/assets/6-c0bd6a04.jpg'
const metadata = {
	title: 'Stable diffusion collection 4',
	format: 'image_collection',
	published: '2022-12-27',
	short: 'Fourth collection of my favourite results from using stable diffusion.',
	image: 'cover_images/sd4.jpg',
	image_alt: 'AI generated image'
}
const Stable_diffusion_collection_4 = create_ssr_component(
	($$result, $$props, $$bindings, slots) => {
		const images = [
			{
				src: img1,
				alt: 'Stable Diffusion generated image of an ancient alien.'
			},
			{
				src: img2,
				alt: 'Stable Diffusion generated image of an ancient alien.'
			},
			{
				src: img3,
				alt: 'Stable Diffusion generated image of an ancient alien.'
			},
			{
				src: img4,
				alt: 'Stable Diffusion generated image of an ancient alien.'
			},
			{
				src: img5,
				alt: 'Stable Diffusion generated image of an ancient alien.'
			},
			{
				src: img6,
				alt: 'Stable Diffusion generated image of an ancient alien.'
			}
		]
		return `${validate_component(ImageGallery, 'ImageGallery').$$render(
			$$result,
			{ images },
			{},
			{}
		)}`
	}
)
export { Stable_diffusion_collection_4 as default, metadata }
