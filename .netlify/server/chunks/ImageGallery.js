import { c as create_ssr_component, f as each, b as add_attribute, v as validate_component, e as escape } from "./index.js";
import { M as ModalContainer } from "./ModalContainer.js";
const ArrowLeftCircle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
<svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"><circle cx="${"12"}" cy="${"12"}" r="${"10"}"></circle><polyline points="${"12 8 8 12 12 16"}"></polyline><line x1="${"16"}" y1="${"12"}" x2="${"8"}" y2="${"12"}"></line></svg>`;
});
const ArrowRightCircle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
<svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"><circle cx="${"12"}" cy="${"12"}" r="${"10"}"></circle><polyline points="${"12 16 16 12 12 8"}"></polyline><line x1="${"8"}" y1="${"12"}" x2="${"16"}" y2="${"12"}"></line></svg>`;
});
const ImageGallery_svelte_svelte_type_style_lang = "";
const css = {
  code: ".image-gallery.svelte-145d7c.svelte-145d7c{display:grid;margin:10px;grid-template-columns:repeat(auto-fill, minmax(300px, 1fr));grid-gap:10px}.image-gallery.svelte-145d7c .image.svelte-145d7c{overflow:hidden;border-radius:10px}.image-gallery.svelte-145d7c .image img.svelte-145d7c{width:100%;height:100%;object-fit:cover}img.in-modal.svelte-145d7c.svelte-145d7c{max-width:100%;max-height:80vh}.controls.svelte-145d7c.svelte-145d7c{display:flex;justify-content:center}.controls.svelte-145d7c button.svelte-145d7c{height:160px;width:160px;background:transparent;border:none;display:flex;justify-content:center;align-items:center}.controls.svelte-145d7c button.svelte-145d7c svg{height:60%;width:60%;color:var(--gallery-ui)}.controls.svelte-145d7c button.svelte-145d7c:hover svg{color:var(--gallery-ui-hover)}.controls.svelte-145d7c .index-label.svelte-145d7c{width:80px;font-size:1.4rem;display:flex;justify-content:center;align-items:center;color:var(--gallery-ui);font-family:var(--sans-serif-font)}",
  map: null
};
const ImageGallery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let indexLabel;
  let { withPreviews = true } = $$props;
  let { images } = $$props;
  let modal;
  let selectedImageIndex = 0;
  function openInModal(index) {
    selectedImageIndex = index;
    modal.openModal();
  }
  if ($$props.withPreviews === void 0 && $$bindings.withPreviews && withPreviews !== void 0)
    $$bindings.withPreviews(withPreviews);
  if ($$props.images === void 0 && $$bindings.images && images !== void 0)
    $$bindings.images(images);
  if ($$props.openInModal === void 0 && $$bindings.openInModal && openInModal !== void 0)
    $$bindings.openInModal(openInModal);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    indexLabel = `${selectedImageIndex + 1} / ${images.length}`;
    $$rendered = `${withPreviews ? `<div class="${"image-gallery svelte-145d7c"}">${each(images, ({ src, alt }, index) => {
      return `<button class="${"clean image svelte-145d7c"}"><img${add_attribute("src", src, 0)}${add_attribute("alt", alt, 0)} class="${"svelte-145d7c"}">
			</button>`;
    })}</div>` : ``}

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
          return `<img class="${"in-modal svelte-145d7c"}"${add_attribute("src", images[selectedImageIndex].src, 0)}${add_attribute("alt", images[selectedImageIndex].alt, 0)}>
	<div class="${"controls svelte-145d7c"}"><button class="${"svelte-145d7c"}">${validate_component(ArrowLeftCircle, "ArrowLeftCircle").$$render($$result, {}, {}, {})}</button>
		<div class="${"index-label svelte-145d7c"}">${escape(indexLabel)}</div>
		<button class="${"svelte-145d7c"}">${validate_component(ArrowRightCircle, "ArrowRightCircle").$$render($$result, {}, {}, {})}</button></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  ImageGallery as I
};
