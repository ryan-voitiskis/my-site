import { c as create_ssr_component, v as validate_component } from './index.js'
import { I as ImageGallery } from './ImageGallery.js'
const img1 = '/_app/immutable/assets/1-cfcf44da.jpg'
const img2 = '/_app/immutable/assets/2-c8ba62cb.jpg'
const img3 = '/_app/immutable/assets/3-b000734e.jpg'
const img4 = '/_app/immutable/assets/4-20c80ab4.jpg'
const img5 = '/_app/immutable/assets/5-885f92a9.jpg'
const metadata = {
	title: 'Stable diffusion collection 2',
	format: 'image_collection',
	published: '2022-12-27',
	short: 'Second collection of my favourite results from using stable diffusion.',
	image: 'cover_images/sd2.jpg',
	image_alt: 'AI generated image'
}
const Stable_diffusion_collection_2 = create_ssr_component(
	($$result, $$props, $$bindings, slots) => {
		const images = [
			{
				src: img1,
				alt: 'Stable Diffusion generated image of alien abduction circuitboard hieroglyph.'
			},
			{
				src: img2,
				alt: 'Stable Diffusion generated image of alien abduction circuitboard hieroglyph.'
			},
			{
				src: img3,
				alt: 'Stable Diffusion generated image of alien abduction circuitboard hieroglyph.'
			},
			{
				src: img4,
				alt: 'Stable Diffusion generated image of alien abduction circuitboard hieroglyph.'
			},
			{
				src: img5,
				alt: 'Stable Diffusion generated image of alien abduction circuitboard hieroglyph.'
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
export { Stable_diffusion_collection_2 as default, metadata }
