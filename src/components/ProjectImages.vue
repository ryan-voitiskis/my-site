<script setup lang="ts">
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@/components/ui/carousel'
import type { OptimisedImage } from '@/lib/image'

defineProps<{ images: OptimisedImage[] }>()
</script>

<template>
	<Carousel class="focus-visible:ring-ring max-w-[475px] focus-visible:!ring-8">
		<CarouselContent>
			<CarouselItem v-for="(image, i) in images" :key="i">
				<img
					class="w-full self-center object-contain"
					:srcset="image.srcSet.attribute"
					v-bind="image.attributes"
				/>
			</CarouselItem>
		</CarouselContent>
		<div class="flex justify-center gap-4">
			<CarouselPrevious />
			<CarouselNext />
		</div>
	</Carousel>
</template>
