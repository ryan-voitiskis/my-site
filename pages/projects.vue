<script setup lang="ts">
const description = `some of my projects i've been working on recently.`
const title = 'ryan voitiskis - projects'
const url = 'https://ryanvoitiskis.com/projects'
const crateGuideImage =
	'https://ryanvoitiskis.com/img/projects/crate-guide/0.png'
useHead({
	title: title,
	meta: [
		{ name: 'description', content: description },
		{ property: 'og:title', content: title },
		{ property: 'og:description', content: description },
		{ property: 'og:url', content: url },
		{ property: 'og:image', content: crateGuideImage },
		{ property: 'twitter:card', content: 'summary_large_image' },
		{ property: 'twitter:title', content: title },
		{ property: 'twitter:description', content: description },
		{ property: 'twitter:image', content: crateGuideImage }
	],
	link: [{ rel: 'canonical', href: url }]
})

const crateGuideImages = [
	{
		src: '/img/projects/crate-guide/0.png',
		alt: 'Crate Guide empty deck interface.'
	},
	{
		src: '/img/projects/crate-guide/1.jpeg',
		alt: 'Crate Guide loaded single deck interface.'
	},
	{
		src: '/img/projects/crate-guide/2.png',
		alt: 'Crate Guide empty deck interface.'
	},
	{
		src: '/img/projects/crate-guide/3.png',
		alt: 'Crate Guide track select interface.'
	},
	{
		src: '/img/projects/crate-guide/4.png',
		alt: 'Crate Guide login interface.'
	}
]

const panelLayoutImages = [
	{
		src: '/img/projects/panel-layout-generator/0.png',
		alt: 'panel-layout-generator interface.'
	},
	{
		src: '/img/projects/panel-layout-generator/1.png',
		alt: 'panel-layout-generator interface with numbers.'
	},
	{
		src: '/img/projects/panel-layout-generator/2.png',
		alt: 'panel-layout-generator interface with 960 panels.'
	}
]
</script>

<template>
	<main class="mx-auto w-full max-w-[1120px] px-4 pb-48">
		<h1 class="font-mono text-sm font-[120] text-muted-foreground">
			> projects
		</h1>

		<article
			class="mx-auto flex flex-col gap-4 border-b py-16 lg:flex-row lg:gap-16 lg:py-24"
		>
			<div class="lg:order-last">
				<h2 class="mb-4 font-mono text-2xl font-[150] leading-none">
					Crate Guide
				</h2>
				<div class="my-2 flex flex-wrap gap-2">
					<Badge text="Vue.js" />
					<Badge text="PWA" />
					<Badge text="desktop" />
				</div>
				<div class="mb-2 text-sm">
					<!-- prettier-ignore -->
					<a href="https://crate.guide" class="font-mono font-[130]">crate.guide</a>
					&nbsp;|&nbsp;
					<a
						href="https://github.com/ryan-voitiskis/crate-guide"
						class="font-mono font-[130]"
					>
						GitHub
					</a>
				</div>
				<p>
					Crate Guide is a DJ app designed to assist in finding compatible
					tracks within a users physical record collection. Records can be added
					manually or imported from your Discogs collection. Audio features from
					your tracks can then be imported from Spotify through a mostly
					automated process.
				</p>
				<p>
					The app was built using Vue.js for the front-end and Express.js on the
					back-end connecting to a MongoDB database. Authenticated requests are
					made to the Discogs API using OAuth 1.0, and OAuth 2.0 with the
					Spotify API.
				</p>
			</div>
			<Carousel
				class="max-w-screen-xs focus-visible:!ring-8 focus-visible:ring-ring"
			>
				<CarouselContent>
					<CarouselItem v-for="(img, i) in crateGuideImages" :key="i">
						<NuxtImg
							class="w-full self-center object-contain"
							:src="img.src"
							:alt="img.alt"
							:preload="i === 0"
							format="webp"
						/>
					</CarouselItem>
				</CarouselContent>
				<div class="flex justify-center gap-4">
					<CarouselPrevious />
					<CarouselNext />
				</div>
			</Carousel>
		</article>

		<article
			class="mx-auto flex flex-col gap-4 border-b py-16 md:flex-row md:gap-16 lg:py-24"
		>
			<div>
				<h2 class="mb-4 font-mono text-2xl font-[150] leading-none">bpm tap</h2>
				<div class="my-2 flex flex-wrap gap-2">
					<Badge text="Vue.js" />
					<Badge text="PWA" />
					<Badge text="D3.js" />
				</div>
				<div class="mb-2 text-sm">
					<!-- prettier-ignore -->
					<a href="https://bpm-tap-0.netlify.app/" class="font-mono font-[130]">bpm-tap-0.netlify.app</a>
					&nbsp;|&nbsp;
					<a
						href="https://github.com/ryan-voitiskis/bpm-tap"
						class="font-mono font-[130]"
					>
						GitHub
					</a>
				</div>
				<p>
					bpm tap is an extremely simple web app for tapping out the tempo of a
					song. I needed a solution for comparing the tempo of two tracks that
					could be installed on a phone quickly. The app is designed to be used
					as a PWA on a phone, with the tempo being tapped out by tapping the
					screen. The tempo is displayed in real-time and can be reset by not
					tapping for 2 seconds.
				</p>
				<p>
					To save a tempo as a reference for future measurements, the user can
					lock the most recent bpm by enabling the lock feature with the lock
					icon button at the top right. My use case for this is to compare the
					tempo of a track I'm playing to the tempo of the next track I want to
					mix in.
				</p>
				<p>
					The app uses
					<a href="https://d3js.org/d3-interpolate/color">
						D3.js colour interpolation
					</a>
					to represent the tempo as a background colour, providing a visual aid
					for comparing the currently tapped tempo with the last or lock bpm.
				</p>
			</div>
			<PhoneMockup>
				<iframe
					title="bpm-tap-0.netlify.app"
					src="https://demo--bpm-tap-0.netlify.app/"
					class="h-full w-full"
				/>
			</PhoneMockup>
		</article>

		<article
			class="mx-auto flex flex-col gap-4 py-16 lg:flex-row lg:gap-16 lg:py-24"
		>
			<div class="lg:order-last">
				<h2 class="mb-4 font-mono text-2xl font-[150] leading-none">
					Panel layout generator
				</h2>
				<div class="my-2 flex flex-wrap gap-2">
					<Badge text="Vue.js" />
					<Badge text="SPA" />
				</div>
				<div class="mb-2 text-sm">
					<!-- prettier-ignore -->
					<a href="https://panel-layout-generator.com" class="font-mono font-[130]">panel-layout-generator.com</a>
					&nbsp;|&nbsp;
					<a
						href="https://github.com/ryan-voitiskis/panel-layout-generator"
						class="font-mono font-[130]"
					>
						GitHub
					</a>
				</div>
				<p>
					Panel layout generator is a simple layout generator for square
					acoustic panel installations. A friend of mine was installing acoustic
					panels using a variety of colours. Since his installations were
					constrained by specific quantities of each colour, and he did not want
					adjacent panels to be of the same colour, he had to plan the layout
					carefully. This app is a quick solution I threw together to solve his
					problem. Panel colours can be added with their quantities and the
					number of rows and columns adjusted. A random layout is generated upon
					any changes.
				</p>
				<p>
					The app was built using Vue.js, with the only other dependencies being
					<a href="https://pinia.vuejs.org/">Pinia</a>
					and
					<a href="https://vue-accessible-color-picker.netlify.app/">
						vue-accessible-color-picker.
					</a>
				</p>
			</div>
			<Carousel
				class="max-w-screen-sm focus-visible:!ring-8 focus-visible:ring-ring"
			>
				<CarouselContent>
					<CarouselItem v-for="(img, i) in panelLayoutImages" :key="i">
						<NuxtImg
							class="w-full object-contain"
							:src="img.src"
							:alt="img.alt"
							format="webp"
						/>
					</CarouselItem>
				</CarouselContent>
				<div class="flex justify-center gap-4">
					<CarouselPrevious />
					<CarouselNext />
				</div>
			</Carousel>
		</article>
	</main>
</template>
