import { c as create_ssr_component, b as add_attribute, v as validate_component, e as escape, f as each } from "../../../chunks/index.js";
const NewspaperIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
<svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"><path d="${"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"}"></path><path d="${"M18 14h-8"}"></path><path d="${"M15 18h-5"}"></path><path d="${"M10 6h8v4h-8V6Z"}"></path></svg>`;
});
const ImageIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
<svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"><rect x="${"3"}" y="${"3"}" width="${"18"}" height="${"18"}" rx="${"2"}" ry="${"2"}"></rect><circle cx="${"9"}" cy="${"9"}" r="${"2"}"></circle><path d="${"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}"></path></svg>`;
});
const PostPreview_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "a.svelte-ppbfoi.svelte-ppbfoi{text-decoration:none}a.svelte-ppbfoi.svelte-ppbfoi:hover{color:unset}article.post-preview.svelte-ppbfoi.svelte-ppbfoi{display:grid;grid-template-columns:minmax(200px, 1fr) 2fr;grid-template-rows:1fr;column-gap:30px;margin-bottom:40px}article.post-preview.svelte-ppbfoi .post-preview-image.svelte-ppbfoi{grid-column:1/2}article.post-preview.svelte-ppbfoi .post-preview-image img.svelte-ppbfoi{width:100%;height:100%;max-height:180px;object-fit:cover;margin:0;float:left}article.post-preview.svelte-ppbfoi .post-preview-content.svelte-ppbfoi{grid-column:2/3}article.post-preview.svelte-ppbfoi .post-preview-content h2.svelte-ppbfoi{display:inline-flex;font-size:1.2rem;line-height:36px;margin:6px 0}article.post-preview.svelte-ppbfoi .post-preview-content h2.svelte-ppbfoi svg{flex-shrink:0;align-self:center;width:1.2em;height:1.2em;margin-right:14px}article.post-preview.svelte-ppbfoi .post-preview-content .published.svelte-ppbfoi{grid-area:2/2/3/3;font-size:0.7em;margin-bottom:6px;color:var(--text-soft);font-family:var(--sans-serif-font)}article.post-preview.svelte-ppbfoi .post-preview-content .short.svelte-ppbfoi{grid-area:3/2/4/3;font-size:0.9em}article.post-preview.svelte-ppbfoi.svelte-ppbfoi:hover{background-color:var(--alt-bg)}@media(max-width: 600px){article.post-preview.svelte-ppbfoi.svelte-ppbfoi{column-gap:10px}article.post-preview.svelte-ppbfoi .post-preview-content h2.svelte-ppbfoi{line-height:26px}article.post-preview.svelte-ppbfoi .post-preview-content h2.svelte-ppbfoi svg{margin-right:10px}article.post-preview.svelte-ppbfoi .post-preview-content .short.svelte-ppbfoi{font-size:1.1rem}}@media(max-width: 520px){article.post-preview.svelte-ppbfoi.svelte-ppbfoi{grid-template-columns:160px 2fr}article.post-preview.svelte-ppbfoi .post-preview-image img.svelte-ppbfoi{max-width:160px}article.post-preview.svelte-ppbfoi .post-preview-content .published.svelte-ppbfoi{font-size:0.7rem}article.post-preview.svelte-ppbfoi .post-preview-content .short.svelte-ppbfoi{font-size:1rem}}@media(max-width: 460px){article.post-preview.svelte-ppbfoi.svelte-ppbfoi{height:unset;background-color:var(--alt-bg);grid-template-columns:1fr}article.post-preview.svelte-ppbfoi .post-preview-image.svelte-ppbfoi{grid-column:1/2}article.post-preview.svelte-ppbfoi .post-preview-image.svelte-ppbfoi{background-color:var(--alt-alt-bg);display:flex;grid-column:1/2;justify-content:space-around}article.post-preview.svelte-ppbfoi .post-preview-image img.svelte-ppbfoi{width:unset;max-width:100%;object-fit:unset}article.post-preview.svelte-ppbfoi .post-preview-content.svelte-ppbfoi{padding:20px;grid-column:1/2}article.post-preview.svelte-ppbfoi .post-preview-content .published.svelte-ppbfoi{grid-area:2/1/3/2;font-size:0.8em;margin-bottom:10px}article.post-preview.svelte-ppbfoi .post-preview-content .short.svelte-ppbfoi{grid-area:3/1/4/2;font-size:0.9em}}",
  map: null
};
const PostPreview = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { post } = $$props;
  let { path } = $$props;
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  const image = post.metadata.image ? post.metadata.image : "";
  const imageAlt = post.metadata.image_alt ? post.metadata.image_alt : post.metadata.title;
  const published = new Date(post.metadata.published).toLocaleDateString(void 0, options);
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  if ($$props.path === void 0 && $$bindings.path && path !== void 0)
    $$bindings.path(path);
  $$result.css.add(css$1);
  return `<a${add_attribute("href", path, 0)} class="${"title svelte-ppbfoi"}"><article class="${"post-preview svelte-ppbfoi"}"><div class="${"post-preview-image svelte-ppbfoi"}">${image ? `<img${add_attribute("src", image, 0)}${add_attribute("alt", imageAlt, 0)} class="${"svelte-ppbfoi"}">` : ``}</div>
		<div class="${"post-preview-content svelte-ppbfoi"}"><h2 class="${"svelte-ppbfoi"}">${post.metadata.format === "article" ? `${validate_component(NewspaperIcon, "NewspaperIcon").$$render($$result, {}, {}, {})}` : `${post.metadata.format === "image_collection" ? `${validate_component(ImageIcon, "ImageIcon").$$render($$result, {}, {}, {})}` : ``}`}
				${escape(post.metadata.title)}</h2>
			<div class="${"published svelte-ppbfoi"}">Posted on ${escape(published)}</div>
			${post.metadata.short ? `<div class="${"short svelte-ppbfoi"}">${escape(post.metadata.short)}</div>` : ``}</div></article>
</a>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1x762jx{padding:0 10px;max-width:var(--page-width);margin:0 auto}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let posts = data.posts;
  function sortBy(type) {
    posts = data.posts.sort((a, b) => {
      if (a.metadata.format === type && b.metadata.format !== type)
        return -1;
      if (a.metadata.format !== type && b.metadata.format === type)
        return 1;
      return 0;
    });
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.sortBy === void 0 && $$bindings.sortBy && sortBy !== void 0)
    $$bindings.sortBy(sortBy);
  $$result.css.add(css);
  return `
<main class="${"svelte-1x762jx"}"><h1>Blog</h1>
	<div class="${"sorting-controls"}"><button>Articles first</button>
		<button>Collections first</button>
		<button>test</button></div>
	${each(posts, (post) => {
    return `${validate_component(PostPreview, "PostPreview").$$render($$result, { post, path: post.path }, {}, {})}`;
  })}
</main>`;
});
export {
  Page as default
};
