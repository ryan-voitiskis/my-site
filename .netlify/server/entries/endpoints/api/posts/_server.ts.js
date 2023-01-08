import { j as json } from "../../../../chunks/index2.js";
const fetchMarkdownPosts = async () => {
  const allPostFiles = /* @__PURE__ */ Object.assign({ "/src/routes/blog/creating-favicons-with-chatgpt.md": () => import("../../../../chunks/creating-favicons-with-chatgpt.js"), "/src/routes/blog/stable-diffusion-collection-1.md": () => import("../../../../chunks/stable-diffusion-collection-1.js"), "/src/routes/blog/stable-diffusion-collection-2.md": () => import("../../../../chunks/stable-diffusion-collection-2.js"), "/src/routes/blog/stable-diffusion-collection-3.md": () => import("../../../../chunks/stable-diffusion-collection-3.js"), "/src/routes/blog/stable-diffusion-collection-4.md": () => import("../../../../chunks/stable-diffusion-collection-4.js"), "/src/routes/blog/stroboscopic-animation-with-javascript-and-svg.md": () => import("../../../../chunks/stroboscopic-animation-with-javascript-and-svg.js") });
  const iterablePostFiles = Object.entries(allPostFiles);
  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const post = await resolver();
      const postPath = path.slice(11, -3);
      return {
        metadata: post.metadata,
        path: postPath
      };
    })
  );
  return allPosts;
};
const GET = async () => {
  const posts = await fetchMarkdownPosts();
  const sortedPosts = posts.sort((a, b) => {
    if (a.metadata.published > b.metadata.published) {
      return -1;
    } else if (a.metadata.published < b.metadata.published) {
      return 1;
    } else {
      return a.metadata.title > b.metadata.title ? -1 : 1;
    }
  });
  return json(sortedPosts);
};
export {
  GET
};
