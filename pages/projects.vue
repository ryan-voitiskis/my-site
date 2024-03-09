<script setup lang="ts">
import crateGuideImage from '../assets/img/crate-guide.jpeg'
import panelLayoutGeneratorImage from '../assets/img/panel-layout-generator.png'

// TODO: preload lcp
</script>

<template>
	<main class="mx-auto w-full max-w-screen-xl pb-48 font-serif">
		<div class="intro mx-auto w-full max-w-[820px] px-4">
			<h1>Projects</h1>
			<p>
				Here's a couple of projects I've been working on recently. I would love
				to hear your feeback at
				<Button as-child variant="link">
					<a href="mailto:ryanvoitiskis@pm.me">ryanvoitiskis@pm.me</a>
				</Button>
			</p>
			<Button>Press me!</Button>
			<br />
			<br />
			<Button variant="secondary">Press me again!</Button>
			<br />
			<br />
			<Button variant="outline">Press me again!</Button>
			<br />
			<br />
			<Button variant="ghost">I'm a ghost!</Button>
			<br />
			<br />
		</div>

		<article class="project">
			<a href="https://crate.guide" class="image-stack clean">
				<img :src="crateGuideImage" alt="Crate Guide's turntable interface." />
			</a>
			<div class="preview">
				<h2><a href="https://crate.guide">Crate Guide</a></h2>
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

		<article class="project flipped">
			<a href="https://panel-layout-generator.com" class="image-stack clean">
				<img
					:src="panelLayoutGeneratorImage"
					alt="Panel layout generators main interface."
				/>
			</a>
			<div class="preview">
				<h2>
					<a href="https://panel-layout-generator.com">
						Panel layout generator
					</a>
				</h2>
				<div class="text-right">
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
					<Button as-child variant="link">
						<a href="https://pinia.vuejs.org/">Pinia</a> and
					</Button>
					<Button as-child variant="link">
						<a href="https://vue-accessible-color-picker.netlify.app/">
							vue-accessible-color-picker
						</a>
					</Button>
				</p>
			</div>
		</article>
	</main>
</template>

<style lang="scss">
.project {
	display: grid;
	grid-template-columns: 560px 1fr;
	grid-template-rows: 1fr;
	grid-gap: 60px;
	margin-bottom: 100px;
	padding: 16px;
	.preview {
		grid-area: 1 / 2 / 2 / 3;
		display: flex;
		flex-direction: column;
	}
	.image-stack {
		grid-area: 1 / 1 / 2 / 2;
		img {
			max-width: 100%;
			object-fit: contain;
			transition: box-shadow ease-in-out 0.2s;
		}
		&:hover img {
			box-shadow: -6px 6px 0px 0px red;
		}
	}
}

@media (min-width: 1061px) {
	.project.flipped {
		grid-template-columns: 1fr 560px;
		h2,
		p {
			text-align: right;
		}
		.image-stack {
			grid-area: 1 / 2 / 2 / 3;
		}
		.preview {
			grid-area: 1 / 1 / 2 / 2;
		}
		.image-stack:hover img {
			box-shadow: 6px 6px 0px 0px darkorange;
		}
	}
}

@media (max-width: 1200px) {
	.project {
		grid-template-columns: 500px 1fr;
		grid-gap: 40px;
	}
}

@media (max-width: 1120px) {
	.project {
		grid-template-columns: 480px 1fr;
		grid-gap: 20px;
	}
}

@media (max-width: 1060px) {
	.project {
		grid-template-columns: 1fr;
		grid-template-rows: auto;
		max-width: 860px;
		margin: 0 auto 80px;
		.image-stack {
			grid-area: 1 / 1 / 2 / 2;
		}
		.preview {
			grid-area: 2 / 1 / 3 / 2;
		}
	}
}

@media (max-width: 600px) {
	.project {
		grid-template-columns: 1fr;
	}
}
</style>
