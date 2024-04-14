<script setup lang="ts">
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@/components/ui/carousel'
import type { OptimisedImg } from '@/lib/image'

defineProps<{ images: OptimisedImg[] }>()
</script>

<template>
	<Carousel
		class="max-w-screen-xs focus-visible:!ring-8 focus-visible:ring-ring"
	>
		<CarouselContent>
			<CarouselItem v-for="(image, i) in images" :key="i">
				<img
					class="w-full self-center object-contain"
					:src="image.src"
					:alt="image.alt"
				/>
			</CarouselItem>
		</CarouselContent>
		<div class="flex justify-center gap-4">
			<CarouselPrevious />
			<CarouselNext />
		</div>
	</Carousel>
</template>
