const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
const load = async ({ params }) => {
  const post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../creating-favicons-with-chatgpt.md": () => import("../../../../chunks/creating-favicons-with-chatgpt.js"), "../stable-diffusion-collection-1.md": () => import("../../../../chunks/stable-diffusion-collection-1.js"), "../stable-diffusion-collection-2.md": () => import("../../../../chunks/stable-diffusion-collection-2.js"), "../stable-diffusion-collection-3.md": () => import("../../../../chunks/stable-diffusion-collection-3.js"), "../stable-diffusion-collection-4.md": () => import("../../../../chunks/stable-diffusion-collection-4.js"), "../stroboscopic-animation-with-javascript-and-svg.md": () => import("../../../../chunks/stroboscopic-animation-with-javascript-and-svg.js") }), `../${params.slug}.md`);
  const title = post.metadata.title;
  const published = post.metadata.published;
  const updated = post.metadata.updated;
  const format = post.metadata.format;
  const content = post.default;
  return { title, published, updated, format, content };
};
export {
  load
};
