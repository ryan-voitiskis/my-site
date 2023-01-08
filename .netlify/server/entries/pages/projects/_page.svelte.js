import { c as create_ssr_component, b as add_attribute, v as validate_component } from "../../../chunks/index.js";
import { I as ImageGallery } from "../../../chunks/ImageGallery.js";
const cg1 = "/_app/immutable/assets/1-9a4476a0.png";
const cg2 = "/_app/immutable/assets/2-17a147fd.png";
const cg3 = "/_app/immutable/assets/3-f0259ca2.png";
const cg4 = "/_app/immutable/assets/4-ce8a5f92.png";
const cg5 = "/_app/immutable/assets/5-1f697ca0.png";
const cg6 = "/_app/immutable/assets/6-df6df3d7.png";
const cg7 = "/_app/immutable/assets/7-9afc1432.png";
const plg1 = "/_app/immutable/assets/1-0fb655d1.png";
const plg2 = "/_app/immutable/assets/2-0b795740.png";
const plg3 = "/_app/immutable/assets/3-e6cc2811.png";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".intro.svelte-17uoi8w.svelte-17uoi8w.svelte-17uoi8w{padding:0 10px;max-width:var(--page-width);margin:0 auto}.project.svelte-17uoi8w.svelte-17uoi8w.svelte-17uoi8w{display:grid;grid-template-columns:560px 1fr;grid-template-rows:1fr;grid-gap:60px;margin-bottom:100px;padding:0 10px}.project.svelte-17uoi8w .preview.svelte-17uoi8w.svelte-17uoi8w{grid-area:1/2/2/3;display:flex;flex-direction:column}.project.svelte-17uoi8w .preview h2.svelte-17uoi8w.svelte-17uoi8w{font-size:2rem}.project.svelte-17uoi8w .preview h2 a.svelte-17uoi8w.svelte-17uoi8w{color:var(--heading-text);text-decoration:none}.project.svelte-17uoi8w .preview .links.svelte-17uoi8w.svelte-17uoi8w{margin-bottom:10px;color:var(--text-soft)}.project.svelte-17uoi8w .preview .links a.svelte-17uoi8w.svelte-17uoi8w{color:var(--text-soft)}.project.svelte-17uoi8w .preview .links a.svelte-17uoi8w.svelte-17uoi8w:hover{color:var(--primary)}.project.svelte-17uoi8w .image-stack.svelte-17uoi8w.svelte-17uoi8w{grid-area:1/1/2/2}.project.svelte-17uoi8w .image-stack img.svelte-17uoi8w.svelte-17uoi8w{max-width:100%;object-fit:contain}.project.svelte-17uoi8w .image-stack:hover img.svelte-17uoi8w.svelte-17uoi8w{box-shadow:-6px 6px 0px 0px var(--primary)}@media(min-width: 1061px){.project.flipped.svelte-17uoi8w.svelte-17uoi8w.svelte-17uoi8w{grid-template-columns:1fr 560px}.project.flipped.svelte-17uoi8w h2.svelte-17uoi8w.svelte-17uoi8w,.project.flipped.svelte-17uoi8w p.svelte-17uoi8w.svelte-17uoi8w,.project.flipped.svelte-17uoi8w .links.svelte-17uoi8w.svelte-17uoi8w{text-align:right}.project.flipped.svelte-17uoi8w .image-stack.svelte-17uoi8w.svelte-17uoi8w{grid-area:1/2/2/3;height:auto !important}.project.flipped.svelte-17uoi8w .preview.svelte-17uoi8w.svelte-17uoi8w{grid-area:1/1/2/2;height:auto !important}.project.flipped.svelte-17uoi8w .image-stack.svelte-17uoi8w:hover img.svelte-17uoi8w{box-shadow:6px 6px 0px 0px var(--primary)}}@media(max-width: 1200px){.project.svelte-17uoi8w.svelte-17uoi8w.svelte-17uoi8w{grid-template-columns:500px 1fr;grid-gap:40px}}@media(max-width: 1120px){.project.svelte-17uoi8w.svelte-17uoi8w.svelte-17uoi8w{grid-template-columns:480px 1fr;grid-gap:20px}}@media(max-width: 1060px){.project.svelte-17uoi8w.svelte-17uoi8w.svelte-17uoi8w{grid-template-columns:1fr;grid-template-rows:auto;max-width:var(--page-width);margin:0 auto 80px}.project.svelte-17uoi8w .image-stack.svelte-17uoi8w.svelte-17uoi8w{grid-area:1/1/2/2;height:auto !important}.project.svelte-17uoi8w .image-stack img.svelte-17uoi8w.svelte-17uoi8w{height:auto !important}.project.svelte-17uoi8w .preview.svelte-17uoi8w.svelte-17uoi8w{grid-area:2/1/3/2;height:auto}}@media(max-width: 600px){.project.svelte-17uoi8w.svelte-17uoi8w.svelte-17uoi8w{grid-template-columns:1fr}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let crateGuideGallery;
  let panelLayoutGeneratorGallery;
  const crateGuideImages = [
    {
      src: cg1,
      alt: `Crate Guide's turntable interface.`
    },
    {
      src: cg2,
      alt: `Crate Guide's session interface with light theme.`
    },
    {
      src: cg3,
      alt: `Crate Guide's session interface with dark theme.`
    },
    {
      src: cg4,
      alt: `Crate Guide's Spotify audio features interface.`
    },
    {
      src: cg5,
      alt: `Crate Guide's progress modal interface.`
    },
    {
      src: cg6,
      alt: `Crate Guide's settings modal interface.`
    },
    {
      src: cg7,
      alt: `Crate Guide's edit track modal interface.`
    }
  ];
  const panelLayoutGeneratorImages = [
    {
      src: plg1,
      alt: `Panel layout generators main interface.`
    },
    {
      src: plg2,
      alt: `Panel layout generators main interface with grid number.`
    },
    {
      src: plg3,
      alt: `Panel layout generators add colour interface`
    }
  ];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"intro svelte-17uoi8w"}"><h1>Projects</h1>
	<p>Here&#39;s a couple of projects I&#39;ve been working on recently. I would love to hear your feeback at <a href="${"mailto:ryanvoitiskis@pm.me"}">ryanvoitiskis@pm.me</a></p>
	<br></div>

<article class="${"project svelte-17uoi8w"}"><button class="${"image-stack clean svelte-17uoi8w"}"><img${add_attribute("src", crateGuideImages[0].src, 0)}${add_attribute("alt", crateGuideImages[0].alt, 0)} class="${"svelte-17uoi8w"}"></button>
	<div class="${"preview svelte-17uoi8w"}"><h2 class="${"svelte-17uoi8w"}"><a href="${"https://crate.guide"}" class="${"svelte-17uoi8w"}">Crate Guide</a></h2>
		<div class="${"links svelte-17uoi8w"}"><a href="${"https://crate.guide"}" class="${"svelte-17uoi8w"}">crate.guide</a> |
			<a href="${"https://github.com/ryan-voitiskis/crate-guide"}" class="${"svelte-17uoi8w"}">GitHub</a></div>
		<p>Crate Guide is a DJ app designed to assist in finding compatible tracks within a users vinyl
			record collection. Records can be added manually or imported from your Discogs collection.
			Audio features from your tracks can then be imported from Spotify through a mostly automated
			process.
		</p>
		<p>The app was built using Vue.js for the front-end and Express.js on the back-end connecting to
			a MongoDB database. Authenticated requests are made to the Discogs API using OAuth 1.0, and
			OAuth 2.0 with the Spotify API.
		</p></div></article>

<article class="${"project flipped svelte-17uoi8w"}"><button class="${"image-stack clean svelte-17uoi8w"}"><img${add_attribute("src", panelLayoutGeneratorImages[0].src, 0)}${add_attribute("alt", panelLayoutGeneratorImages[0].alt, 0)} class="${"svelte-17uoi8w"}"></button>
	<div class="${"preview svelte-17uoi8w"}"><h2 class="${"svelte-17uoi8w"}"><a href="${"https://panel-layout-generator.com"}" class="${"svelte-17uoi8w"}">Panel layout generator</a></h2>
		<div class="${"links svelte-17uoi8w"}"><a href="${"https://panel-layout-generator.com"}" class="${"svelte-17uoi8w"}">panel-layout-generator.com</a> |
			<a href="${"https://github.com/ryan-voitiskis/panel-layout-generator"}" class="${"svelte-17uoi8w"}">GitHub</a></div>
		<p class="${"svelte-17uoi8w"}">Panel layout generator is a simple layout generator for square acoustic panel installations. A
			friend of mine was installing acoustic panels using a variety of colours. Since his
			installations were constrained by specific quantities of each colour, and he did not want
			adjacent panels to be of the same colour, he had to plan the layout carefully. This app is a
			quick solution I threw together to solve his problem. Panel colours can be added with their
			quantities and the number of rows and columns adjusted. A random layout is generated upon any
			changes.
		</p>
		<p class="${"svelte-17uoi8w"}">The app was built using Vue.js, with the only other dependencies being <a href="${"https://pinia.vuejs.org/"}" class="${"svelte-17uoi8w"}">Pinia</a>
			and <a href="${"https://vue-accessible-color-picker.netlify.app/"}" class="${"svelte-17uoi8w"}">vue-accessible-color-picker</a></p></div></article>

${validate_component(ImageGallery, "ImageGallery").$$render(
      $$result,
      {
        images: crateGuideImages,
        withPreviews: false,
        this: crateGuideGallery
      },
      {
        this: ($$value) => {
          crateGuideGallery = $$value;
          $$settled = false;
        }
      },
      {}
    )}
${validate_component(ImageGallery, "ImageGallery").$$render(
      $$result,
      {
        images: panelLayoutGeneratorImages,
        withPreviews: false,
        this: panelLayoutGeneratorGallery
      },
      {
        this: ($$value) => {
          panelLayoutGeneratorGallery = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
