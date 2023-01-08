import { c as create_ssr_component } from "../../../chunks/index.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-cl2qbv{max-width:1400px;margin:0 auto}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<main class="${"svelte-cl2qbv"}">${slots.default ? slots.default({}) : ``}
</main>`;
});
export {
  Layout as default
};
