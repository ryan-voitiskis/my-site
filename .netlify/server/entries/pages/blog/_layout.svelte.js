import { c as create_ssr_component } from "../../../chunks/index.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1wpao3d{max-width:var(--page-width);margin:0 auto}article > pre{box-shadow:rgba(0, 0, 0, 0.15) 0px 2px 8px;border-radius:5px}ol{margin-left:calc(var(--horizontal-padding) + 20px)}article ul{margin-left:calc(var(--horizontal-padding) + 43px)}@media(min-width: 879px){article > pre{margin-left:var(--horizontal-padding) !important;margin-right:var(--horizontal-padding) !important}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<main class="${"svelte-1wpao3d"}">${slots.default ? slots.default({}) : ``}
</main>`;
});
export {
  Layout as default
};
