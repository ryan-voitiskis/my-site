import { type VariantProps, cva } from 'class-variance-authority'

export { default as Carousel } from './Carousel.vue'
export { default as CarouselContent } from './CarouselContent.vue'
export { default as CarouselItem } from './CarouselItem.vue'
export { default as CarouselPrevious } from './CarouselPrevious.vue'
export { default as CarouselNext } from './CarouselNext.vue'
export { useCarousel } from './useCarousel'

export type { EmblaCarouselType as CarouselApi } from 'embla-carousel'

export const carouselButtonVariants = cva('touch-manipulation', {
	variants: {
		variant: {
			default:
				'flex items-center justify-center text-foreground hover:text-foreground/80',
			modal:
				'flex items-center justify-center text-yellow-100 hover:text-yellow-300'
		}
	},
	defaultVariants: {
		variant: 'default'
	}
})

export type CarouselButtonVariants = VariantProps<typeof carouselButtonVariants>
