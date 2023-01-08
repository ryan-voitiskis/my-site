import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
import { M as ModalContainer } from "../../chunks/ModalContainer.js";
import Prism from "prismjs";
const TickCircleIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
<svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"><path d="${"M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"}"></path><path d="${"m9 12 2 2 4-4"}"></path></svg>`;
});
const TernaryExample_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".modal-box.svelte-1jjz6lr.svelte-1jjz6lr{max-width:600px;padding:40px;background-color:var(--alt-bg);border-radius:10px;text-align:left}.modal-box.svelte-1jjz6lr pre.svelte-1jjz6lr{max-width:100%}.correct.svelte-1jjz6lr.svelte-1jjz6lr{display:flex;align-items:center;justify-content:space-between;gap:10px}.correct.svelte-1jjz6lr svg{width:30px;height:30px;stroke:var(--correct-green)}@media(max-width: 440px){.modal-box.svelte-1jjz6lr.svelte-1jjz6lr{padding:20px}}",
  map: null
};
const TernaryExample = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const chainedTernaryExample = `const message = !isError
  ? 'Success'
  : errorCode === 404
  ? 'Page not found'
  : 'An error has occurred'`;
  const nestedTeraryExample = `const message = isError
  ? errorCode === 404
    ? 'Page not found'
    : 'An error has occurred'
  : 'Success'`;
  const ifExample = `let message
if (!isError) {
  message = 'Success'
} else {
  if (errorCode === 404) {
    message = 'Page not found'
  } else {
    message = 'An error has occurred'
  }
}`;
  const chainedHighlighted = Prism.highlight(chainedTernaryExample, Prism.languages.javascript, "javascript");
  const nestedHighlighted = Prism.highlight(nestedTeraryExample, Prism.languages.javascript, "javascript");
  const ifHighlighted = Prism.highlight(ifExample, Prism.languages.javascript, "javascript");
  $$result.css.add(css$1);
  return `<div class="${"modal-box standard-text svelte-1jjz6lr"}"><h2>Chained Ternaries</h2>
	<span>Chained ternary</span>
	<div class="${"correct svelte-1jjz6lr"}"><pre class="${"language-javascript svelte-1jjz6lr"}"><code class="${"language-javascript"}"><!-- HTML_TAG_START -->${chainedHighlighted}<!-- HTML_TAG_END --></code></pre>
		${validate_component(TickCircleIcon, "TickCircleIcon").$$render($$result, {}, {}, {})}</div>
	<span>Nested ternary</span>
	<pre class="${"language-javascript svelte-1jjz6lr"}"><code class="${"language-javascript"}"><!-- HTML_TAG_START -->${nestedHighlighted}<!-- HTML_TAG_END --></code></pre>
	<span>If</span>
	<pre class="${"language-javascript svelte-1jjz6lr"}"><code class="${"language-javascript"}"><!-- HTML_TAG_START -->${ifHighlighted}<!-- HTML_TAG_END --></code></pre>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-3n928m{padding:0 10px 300px 10px;max-width:var(--page-width);margin:0 auto}.links.svelte-3n928m{margin:20px 30px;font-family:var(--monospace-font);font-size:1.1rem}button.inline-subtle.svelte-3n928m{display:inline;color:var(--text);font-family:var(--serif-font);font-size:1em;background-color:var(--alt-bg);border:none;text-decoration:underline}button.inline-subtle.svelte-3n928m:hover{color:var(--text-strong);background-color:var(--alt-alt-bg)}.email.svelte-3n928m{margin:0 20px}@media(max-width: 740px){.email.svelte-3n928m{text-align:center}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let modal;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<main class="${"svelte-3n928m"}"><h1>Ryan Voitiskis</h1>

	<div class="${"links svelte-3n928m"}"><a href="${"mailto:ryanvoitiskis@pm.me"}">ryanvoitiskis@pm.me</a> |
		<a href="${"https://github.com/ryan-voitiskis"}">GitHub</a></div>

	<p>G&#39;day, I&#39;m Ryan. I build web apps with JavaScript. I enjoy working with Vue and recently
		SvelteKit. I am interested in front-end and back-end development, focusing on creating intuitive
		and powerful apps.
	</p>

	<p>Head over to <a href="${"/projects"}">projects</a> to see what I&#39;ve been working on lately.
	</p>

	<h2>I&#39;m looking for work</h2>

	<p>I&#39;m hoping to find a JavaScript/TypeScript developer role that allows me to pursue my passion
		full-time. Ideally the role involves some face to face time with team members, with also a
		significant amount of uninterrupted, focused development time, either in an office or at home.
	</p>

	<p>I have built several web apps and I&#39;m keen to work on more. I&#39;d also be interested in using
		JavaScript to develop native apps and PWAs. I enjoy encountering interesting and new problems,
		which I seek out to expand my problem solving perspective. Ultimately I want to work on
		challenging projects that create user value.
	</p>

	<p>I&#39;m really hoping to working in a team of experienced developers I can learn from. I feel that
		is my most crucial requirement now as I haven&#39;t had much opportunity to do so.
	</p>

	<h2>Technologies</h2>

	<p>I&#39;m comfortable using:</p>
	<ul><li>Vue and SvelteKit</li>
		<li>Node with Express</li>
		<li>MongoDB and MySQL</li>
		<li>PHP and WordPress</li>
		<li>CSS (SCSS) and SVG</li></ul>
	<p>I have some experience with:</p>
	<ul><li>C and C++</li>
		<li>Java</li>
		<li>ASP.NET and VB</li></ul>

	<h2>Coding style</h2>

	<p>When solving a problem, I like to work on first building a solid understanding of the problem,
		considering many possible solutions and technologies. I then work on data models and building a
		schema. From there I like to jump right into coding the UI and functionality simultaneously,
		aiming to complete tasks in a close to optimal sequence. I often use pen and paper to create
		wireframes and storyboards for complicated UIs.
	</p>

	<ul><li>I prefer TypeScript over JavaScript but I&#39;m happy to use either. I&#39;m not a TypeScript expert,
			but I find types to be very helpful.
		</li>
		<li>I aim to use descriptive, and sometimes long variable and function names. Because of this, I
			rely less on comments to map out my code.
		</li>
		<li>I&#39;m cautious about adding dependencies, preferring to code out custom solutions where logical
			to do so.
		</li>
		<li>I very much like <button class="${"inline-subtle svelte-3n928m"}">chained ternaries (not nested)</button>. I realise the readability issues others find with them, so I would avoid using them on
			projects with multiple devs.
		</li>
		<li>In my own JavaScript projects I use tabs and Prettier with <code>&quot;semi&quot;: false</code></li>
		<li>I code all my styling without css frameworks.</li></ul>

	<div class="${"side-note"}">I have read and very much enjoyed the book <b>Clean Code</b> by <b>Robert C. Martin</b>. I try
		to implement most of the concepts from the book in my work.
	</div>
	<p>I am <b>always open to learn and try new technologies</b> and alternative methods.</p>

	<h2>Ambitions</h2>

	<ul><li>Build seamless and elegant UIs.</li>
		<li>Learn as many techniques and technologies as possible.</li>
		<li>Solve complex engineering problems for the pleasure of it.</li>
		<li>Apply machine learning solutions.</li>
		<li>Learn rust properly and atleast dabble in systems programming again.</li>
		<li>Document some of my solutions and journeys into code, for the benefit of others, as I have
			gained so much of my knowledge from technical documentation.
		</li></ul>

	<p>If you have a position available that I&#39;d be suited to, I&#39;d love to hear from you.</p>
	<div class="${"email svelte-3n928m"}"><a href="${"mailto:ryanvoitiskis@pm.me"}">ryanvoitiskis@pm.me</a></div></main>

${validate_component(ModalContainer, "ModalContainer").$$render(
      $$result,
      { this: modal },
      {
        this: ($$value) => {
          modal = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(TernaryExample, "TernaryExample").$$render($$result, {}, {}, {})}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
