import { c as create_ssr_component, e as escape, h as null_to_empty, v as validate_component, m as missing_component } from "../../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "article.article.svelte-y0ulrt.svelte-y0ulrt{padding-bottom:300px}table.svelte-y0ulrt.svelte-y0ulrt{border-left:4px solid var(--secondary) !important;margin:0 0 40px calc(var(--horizontal-padding) + 20px);font-size:1rem;font-family:var(--sans-serif-font);color:var(--text-soft)}table.svelte-y0ulrt tr td.svelte-y0ulrt:first-of-type{font-weight:bold;padding-left:20px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  const published = new Date(data.published).toLocaleDateString(void 0, options);
  const updated = data.updated ? new Date(data.updated).toLocaleDateString(void 0, options) : "";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<article class="${escape(null_to_empty(data.format), true) + " svelte-y0ulrt"}"><h1>${escape(data.title)}</h1>

	<table class="${"clean svelte-y0ulrt"}"><tr><td class="${"svelte-y0ulrt"}">Published</td>
			<td class="${"svelte-y0ulrt"}">${escape(published)}</td></tr>
		${updated ? `<tr><td class="${"svelte-y0ulrt"}">Updated</td>
				<td class="${"svelte-y0ulrt"}">${escape(updated)}</td></tr>` : ``}</table>

	${validate_component(data.content || missing_component, "svelte:component").$$render($$result, {}, {}, {})}
</article>`;
});
export {
  Page as default
};
