import { c as create_ssr_component } from "./index.js";
const ModalContainer_svelte_svelte_type_style_lang = "";
const css = {
  code: ".modal-backdrop.svelte-ir2aen{position:fixed;background:var(--modal-backdrop);backdrop-filter:blur(10px) grayscale(0.8);top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;z-index:99;display:none}.modal-backdrop.open.svelte-ir2aen{display:flex}.modal.svelte-ir2aen{border-radius:10px;z-index:100;display:flex;flex-direction:column;max-width:v-bind(width);max-width:100%;margin:10px}",
  map: null
};
const ModalContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { modalIsOpen = false } = $$props;
  function openModal() {
    modalIsOpen = true;
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    });
  }
  function closeModal() {
    modalIsOpen = false;
  }
  if ($$props.modalIsOpen === void 0 && $$bindings.modalIsOpen && modalIsOpen !== void 0)
    $$bindings.modalIsOpen(modalIsOpen);
  if ($$props.openModal === void 0 && $$bindings.openModal && openModal !== void 0)
    $$bindings.openModal(openModal);
  $$result.css.add(css);
  return `<button class="${["clean modal-backdrop svelte-ir2aen", modalIsOpen ? "open" : ""].join(" ").trim()}"><div class="${"modal svelte-ir2aen"}">${slots.default ? slots.default({}) : ``}</div>
</button>`;
});
export {
  ModalContainer as M
};
