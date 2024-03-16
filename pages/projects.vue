<script setup lang="ts">
import crateGuideImage from '../assets/img/crate-guide.jpeg'
import panelLayoutGeneratorImage from '../assets/img/panel-layout-generator.png'

// TODO: preload lcp
</script>

<template>
	<main class="mx-auto w-full max-w-screen-xl px-4 pb-48 font-serif">
		<h1 class="font-mono text-sm font-[120] text-muted-foreground">
			> projects
		</h1>
		<article>
			<PhoneMockup>
				<iframe
					src="https://demo--bpm-tap-0.netlify.app/"
					class="h-full w-full"
				/>
			</PhoneMockup>
			<div>
				<h2 class="font-mono font-bold">bpm tap</h2>
				<div>
					<Button as-child variant="link">
						<a href="https://bpm-tap-0.netlify.app/">bpm-tap-0.netlify.app</a>
					</Button>
					|
					<Button as-child variant="link">
						<a href="https://github.com/ryan-voitiskis/bpm-tap">GitHub</a>
					</Button>
				</div>
				<p>
					bpm-tap is an extremely simple web app for tapping out the tempo of a
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
		</article>

		<article>
			<a href="https://crate.guide">
				<img :src="crateGuideImage" alt="Crate Guide's turntable interface." />
			</a>
			<div>
				<h2>Crate Guide</h2>
				<div>
					<Button as-child variant="link">
						<a href="https://crate.guide">crate.guide</a>
					</Button>
					|
					<Button as-child variant="link">
						<a href="https://github.com/ryan-voitiskis/crate-guide">GitHub</a>
					</Button>
				</div>
				<p>
					Crate Guide is a DJ app designed to assist in finding compatible
					tracks within a users vinyl record collection. Records can be added
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
		</article>

		<article>
			<a href="https://panel-layout-generator.com">
				<img
					:src="panelLayoutGeneratorImage"
					alt="Panel layout generators main interface."
				/>
			</a>
			<div>
				<h2>
					<a href="https://panel-layout-generator.com">
						Panel layout generator
					</a>
				</h2>
				<div>
					<Button as-child variant="link">
						<a href="https://panel-layout-generator.com">
							panel-layout-generator.com
						</a>
					</Button>
					|
					<Button as-child variant="link">
						<a href="https://github.com/ryan-voitiskis/panel-layout-generator">
							GitHub
						</a>
					</Button>
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
		</article>
	</main>
</template>
