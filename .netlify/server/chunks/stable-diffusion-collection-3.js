import { c as create_ssr_component, v as validate_component } from './index.js'
import { I as ImageGallery } from './ImageGallery.js'
const img1 = '/_app/immutable/assets/1-02475b8f.jpg'
const img2 = '/_app/immutable/assets/2-ca427f40.jpg'
const img3 = '/_app/immutable/assets/3-e85280ce.jpg'
const img4 = '/_app/immutable/assets/4-94cb3a22.jpg'
const img5 = '/_app/immutable/assets/5-fca962cb.jpg'
const img6 = '/_app/immutable/assets/6-7efaf0df.jpg'
const img7 = '/_app/immutable/assets/7-7db3ed75.jpg'
const img8 = '/_app/immutable/assets/8-4555470b.jpg'
const img9 = '/_app/immutable/assets/9-fb285969.jpg'
const metadata = {
	title: 'Stable diffusion collection 3',
	format: 'image_collection',
	published: '2022-12-27',
	short: 'Third collection of my favourite results from using stable diffusion.',
	image: 'cover_images/sd3.jpg',
	image_alt: 'AI generated image'
}
const Stable_diffusion_collection_3 = create_ssr_component(
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
			},
			{
				src: img7,
				alt: 'Stable Diffusion generated image of an ancient alien.'
			},
			{
				src: img8,
				alt: 'Stable Diffusion generated image of an ancient alien.'
			},
			{
				src: img9,
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
export { Stable_diffusion_collection_3 as default, metadata }
