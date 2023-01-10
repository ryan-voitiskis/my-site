import { c as create_ssr_component, v as validate_component } from "./index.js";
import { I as ImageGallery } from "./ImageGallery.js";
const img1 = "/_app/immutable/assets/1-387f84a0.jpg";
const img2 = "/_app/immutable/assets/2-7309cd7e.jpg";
const img3 = "/_app/immutable/assets/3-3ea002d7.jpg";
const img4 = "/_app/immutable/assets/4-86f458c0.jpg";
const metadata = {
  "title": "Stable diffusion collection 1",
  "format": "image_collection",
  "published": "2022-12-12",
  "short": "First collection of my favourite results from using stable diffusion.",
  "image": "cover_images/sd1.jpg",
  "image_alt": "AI generated image"
};
const Stable_diffusion_collection_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const images = [
    {
      src: img1,
      alt: "AI generated image of an interdimensional alien woman casting a spell."
    },
    {
      src: img2,
      alt: "AI generated image of an alien abduction."
    },
    {
      src: img3,
      alt: "AI generated image of an interdimensional alien woman casting a spell."
    },
    {
      src: img4,
      alt: "AI generated image of an alien dance party"
    }
  ];
  return `${validate_component(ImageGallery, "ImageGallery").$$render($$result, { images }, {}, {})}`;
});
export {
  Stable_diffusion_collection_1 as default,
  metadata
};
