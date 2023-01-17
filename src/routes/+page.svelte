<script lang="ts">
	import ModalContainer from '$lib/components/ModalContainer.svelte'
	import TernaryExample from './TernaryExample.svelte'
	import FloralSeparator from '$lib/components/icons/FloralSeparator.svelte'
	let modal: ModalContainer
</script>

<main>
	<h1>Ryan Voitiskis</h1>

	<div class="links">
		<a href="mailto:ryanvoitiskis@pm.me">ryanvoitiskis@pm.me</a> |
		<a href="https://github.com/ryan-voitiskis">GitHub</a>
	</div>

	<p>
		Hey, I'm Ryan. I build web apps with JavaScript. I enjoy working with Vue and recently
		SvelteKit. I am interested in front-end and back-end development, focusing on creating intuitive
		and powerful apps.
	</p>

	<p>
		Head over to <a href="/projects">projects</a> to see what I've been working on lately.
	</p>

	<h2>I'm looking for work</h2>

	<p>
		I'm hoping to find a JavaScript/TypeScript developer role that allows me to pursue my passion
		full-time. Ideally the role involves some face to face time with team members, with also a
		significant amount of uninterrupted, focused development time, either in an office or at home.
	</p>

	<p>
		I have built several web apps and I'm keen to work on more. I'd also be interested in using
		JavaScript to develop native apps and PWAs. I enjoy encountering interesting and new problems,
		which I seek out to expand my problem solving perspective. Ultimately I want to work on
		challenging projects that create user value.
	</p>

	<p>
		I'm really hoping to working in a team with some experienced developers I can learn from, as I
		haven't had much opportunity to do so.
	</p>

	<h2>Technologies</h2>

	<p>I'm comfortable using:</p>
	<ul>
		<li>Vue and SvelteKit</li>
		<li>Node with Express</li>
		<li>MongoDB and MySQL</li>
		<li>PHP and WordPress</li>
		<li>CSS (SCSS) and SVG</li>
		<li>Jest/Vitest</li>
		<li>Git, Linux, SSH</li>
	</ul>
	<p>I have some experience with:</p>
	<ul>
		<li>C and C++</li>
		<li>Java</li>
		<li>ASP.NET and VB</li>
	</ul>

	<h2>Coding style</h2>

	<p>
		When solving a problem, I like to work on first building a solid understanding of the problem,
		considering many possible solutions and technologies. I then work on data models and building a
		schema. From there I like to jump right into coding the UI and functionality simultaneously,
		aiming to complete tasks in a close to optimal sequence. I often use pen and paper to create
		wireframes and storyboards for complicated UIs.
	</p>

	<ul>
		<li>
			I prefer TypeScript over JavaScript but I'm happy to use either. I'm not a TypeScript expert,
			but I find types to be very helpful.
		</li>
		<li>
			I aim to use descriptive, and sometimes long variable and function names. Because of this, I
			rely less on comments to map out my code.
		</li>
		<li>
			I'm cautious about adding dependencies, preferring to code out custom solutions where logical
			to do so.
		</li>
		<li>
			I very much like <button class="inline-subtle" on:click={modal.openModal}
				>chained ternaries (not nested)</button
			>. I realise the readability issues others find with them, so I would avoid using them on
			projects with multiple devs.
		</li>
		<li>
			In my own JavaScript projects I use tabs and Prettier with <code>"semi": false</code>
		</li>
		<li>
			I code my styling in my own projects without CSS frameworks, but I am not opposed to them.
		</li>
	</ul>

	<div class="side-note">
		I have read and very much enjoyed the book <b>Clean Code</b> by <b>Robert C. Martin</b>. I try
		to implement most of the concepts from the book in my work.
	</div>
	<p>I am <b>always open to learn and try new technologies</b> and alternative methods.</p>

	<h2>Ambitions</h2>

	<ul>
		<li>Build seamless and elegant UIs.</li>
		<li>Learn as many techniques and technologies as possible.</li>
		<li>Solve complex engineering problems for the pleasure of it.</li>
		<li>Apply machine learning solutions.</li>
		<li>Learn rust properly and atleast dabble in systems programming again.</li>
		<li>
			Document some of my solutions and journeys into code, for the benefit of others, as I have
			gained so much of my knowledge from technical documentation.
		</li>
	</ul>

	<FloralSeparator />

	<p>If you have a position available that I'd be suited to, I'd love to hear from you.</p>
	<div class="email links">
		<a href="mailto:ryanvoitiskis@pm.me">ryanvoitiskis@pm.me</a>
	</div>
</main>

<ModalContainer bind:this={modal}>
	<TernaryExample />
</ModalContainer>

<style lang="scss">
	main {
		padding: 0 10px 300px 10px;
		max-width: var(--page-width);
		margin: 0 auto;
	}

	.links {
		margin: 20px 30px;
		font-family: var(--monospace-font);
		font-size: 1.1rem;
	}

	button.inline-subtle {
		display: inline;
		color: var(--text);
		font-family: var(--serif-font);
		font-size: 1em;
		background-color: var(--alt-bg);
		border: none;
		text-decoration: underline;
		&:hover {
			color: var(--text-strong);
			background-color: var(--alt-alt-bg);
		}
	}
	@media (max-width: 740px) {
		.email {
			text-align: center;
		}
	}
</style>
