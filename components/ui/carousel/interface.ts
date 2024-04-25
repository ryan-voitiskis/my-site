import type { HTMLAttributes, Ref } from 'vue'
import type {
	EmblaCarouselType as CarouselApi,
	EmblaOptionsType as CarouselOptions,
	EmblaPluginType as CarouselPlugin
} from 'embla-carousel'

export interface CarouselProps {
	opts?: CarouselOptions | Ref<CarouselOptions>
	plugins?: CarouselPlugin[] | Ref<CarouselPlugin[]>
	orientation?: 'horizontal' | 'vertical'
}

export interface CarouselEmits {
	(e: 'init-api', payload: CarouselApi): void
}

export interface WithClassAsProps {
	class?: HTMLAttributes['class']
}
