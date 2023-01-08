import { c as create_ssr_component, e as escape, v as validate_component, h as null_to_empty, b as add_attribute } from "./index.js";
import Prism$1 from "prismjs";
const ChatbotDisplayIcon_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "svg.svelte-6wmwf0{height:24px;width:24px}",
  map: null
};
const ChatbotDisplayIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<svg width="${"41"}" height="${"41"}" viewBox="${"0 0 41 41"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}" stroke-width="${"1.5"}" class="${"svelte-6wmwf0"}"><path d="${"M37.5324 16.8707C37.9808 15.5241 38.1363 14.0974 37.9886 12.6859C37.8409 11.2744 37.3934 9.91076 36.676 8.68622C35.6126 6.83404 33.9882 5.3676 32.0373 4.4985C30.0864 3.62941 27.9098 3.40259 25.8215 3.85078C24.8796 2.7893 23.7219 1.94125 22.4257 1.36341C21.1295 0.785575 19.7249 0.491269 18.3058 0.500197C16.1708 0.495044 14.0893 1.16803 12.3614 2.42214C10.6335 3.67624 9.34853 5.44666 8.6917 7.47815C7.30085 7.76286 5.98686 8.3414 4.8377 9.17505C3.68854 10.0087 2.73073 11.0782 2.02839 12.312C0.956464 14.1591 0.498905 16.2988 0.721698 18.4228C0.944492 20.5467 1.83612 22.5449 3.268 24.1293C2.81966 25.4759 2.66413 26.9026 2.81182 28.3141C2.95951 29.7256 3.40701 31.0892 4.12437 32.3138C5.18791 34.1659 6.8123 35.6322 8.76321 36.5013C10.7141 37.3704 12.8907 37.5973 14.9789 37.1492C15.9208 38.2107 17.0786 39.0587 18.3747 39.6366C19.6709 40.2144 21.0755 40.5087 22.4946 40.4998C24.6307 40.5054 26.7133 39.8321 28.4418 38.5772C30.1704 37.3223 31.4556 35.5506 32.1119 33.5179C33.5027 33.2332 34.8167 32.6547 35.9659 31.821C37.115 30.9874 38.0728 29.9178 38.7752 28.684C39.8458 26.8371 40.3023 24.6979 40.0789 22.5748C39.8556 20.4517 38.9639 18.4544 37.5324 16.8707ZM22.4978 37.8849C20.7443 37.8874 19.0459 37.2733 17.6994 36.1501C17.7601 36.117 17.8666 36.0586 17.936 36.0161L25.9004 31.4156C26.1003 31.3019 26.2663 31.137 26.3813 30.9378C26.4964 30.7386 26.5563 30.5124 26.5549 30.2825V19.0542L29.9213 20.998C29.9389 21.0068 29.9541 21.0198 29.9656 21.0359C29.977 21.052 29.9842 21.0707 29.9867 21.0902V30.3889C29.9842 32.375 29.1946 34.2791 27.7909 35.6841C26.3872 37.0892 24.4838 37.8806 22.4978 37.8849ZM6.39227 31.0064C5.51397 29.4888 5.19742 27.7107 5.49804 25.9832C5.55718 26.0187 5.66048 26.0818 5.73461 26.1244L13.699 30.7248C13.8975 30.8408 14.1233 30.902 14.3532 30.902C14.583 30.902 14.8088 30.8408 15.0073 30.7248L24.731 25.1103V28.9979C24.7321 29.0177 24.7283 29.0376 24.7199 29.0556C24.7115 29.0736 24.6988 29.0893 24.6829 29.1012L16.6317 33.7497C14.9096 34.7416 12.8643 35.0097 10.9447 34.4954C9.02506 33.9811 7.38785 32.7263 6.39227 31.0064ZM4.29707 13.6194C5.17156 12.0998 6.55279 10.9364 8.19885 10.3327C8.19885 10.4013 8.19491 10.5228 8.19491 10.6071V19.808C8.19351 20.0378 8.25334 20.2638 8.36823 20.4629C8.48312 20.6619 8.64893 20.8267 8.84863 20.9404L18.5723 26.5542L15.206 28.4979C15.1894 28.5089 15.1703 28.5155 15.1505 28.5173C15.1307 28.5191 15.1107 28.516 15.0924 28.5082L7.04046 23.8557C5.32135 22.8601 4.06716 21.2235 3.55289 19.3046C3.03862 17.3858 3.30624 15.3413 4.29707 13.6194ZM31.955 20.0556L22.2312 14.4411L25.5976 12.4981C25.6142 12.4872 25.6333 12.4805 25.6531 12.4787C25.6729 12.4769 25.6928 12.4801 25.7111 12.4879L33.7631 17.1364C34.9967 17.849 36.0017 18.8982 36.6606 20.1613C37.3194 21.4244 37.6047 22.849 37.4832 24.2684C37.3617 25.6878 36.8382 27.0432 35.9743 28.1759C35.1103 29.3086 33.9415 30.1717 32.6047 30.6641C32.6047 30.5947 32.6047 30.4733 32.6047 30.3889V21.188C32.6066 20.9586 32.5474 20.7328 32.4332 20.5338C32.319 20.3348 32.154 20.1698 31.955 20.0556ZM35.3055 15.0128C35.2464 14.9765 35.1431 14.9142 35.069 14.8717L27.1045 10.2712C26.906 10.1554 26.6803 10.0943 26.4504 10.0943C26.2206 10.0943 25.9948 10.1554 25.7963 10.2712L16.0726 15.8858V11.9982C16.0715 11.9783 16.0753 11.9585 16.0837 11.9405C16.0921 11.9225 16.1048 11.9068 16.1207 11.8949L24.1719 7.25025C25.4053 6.53903 26.8158 6.19376 28.2383 6.25482C29.6608 6.31589 31.0364 6.78077 32.2044 7.59508C33.3723 8.40939 34.2842 9.53945 34.8334 10.8531C35.3826 12.1667 35.5464 13.6095 35.3055 15.0128ZM14.2424 21.9419L10.8752 19.9981C10.8576 19.9893 10.8423 19.9763 10.8309 19.9602C10.8195 19.9441 10.8122 19.9254 10.8098 19.9058V10.6071C10.8107 9.18295 11.2173 7.78848 11.9819 6.58696C12.7466 5.38544 13.8377 4.42659 15.1275 3.82264C16.4173 3.21869 17.8524 2.99464 19.2649 3.1767C20.6775 3.35876 22.0089 3.93941 23.1034 4.85067C23.0427 4.88379 22.937 4.94215 22.8668 4.98473L14.9024 9.58517C14.7025 9.69878 14.5366 9.86356 14.4215 10.0626C14.3065 10.2616 14.2466 10.4877 14.2479 10.7175L14.2424 21.9419ZM16.071 17.9991L20.4018 15.4978L24.7325 17.9975V22.9985L20.4018 25.4983L16.071 22.9985V17.9991Z"}" fill="${"white"}"></path></svg>`;
});
const HumanDisplayIcon_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "svg.svelte-6wmwf0{height:24px;width:24px}",
  map: null
};
const HumanDisplayIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<svg stroke="${"white"}" fill="${"none"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"svelte-6wmwf0"}"><path d="${"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}"></path><circle cx="${"12"}" cy="${"7"}" r="${"4"}"></circle></svg>`;
});
const ChatGPTMessage_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".wrapper.svelte-18jyw10.svelte-18jyw10.svelte-18jyw10{margin:0 -110px 0 -110px}.wrapper.from-human.svelte-18jyw10 .icon.svelte-18jyw10.svelte-18jyw10{background-color:#94a4a6}.wrapper.from-bot.svelte-18jyw10.svelte-18jyw10.svelte-18jyw10{background:linear-gradient(to right, transparent 0, var(--alt-bg) 100px, var(--alt-bg) calc(var(--page-width) + 100px), transparent calc(var(--page-width) + 200px))}.wrapper.from-bot.svelte-18jyw10 .icon.svelte-18jyw10.svelte-18jyw10{background-color:rgb(16, 163, 127)}.wrapper.svelte-18jyw10 .message.svelte-18jyw10.svelte-18jyw10{max-width:var(--page-width);margin:0 auto;display:grid;grid-template-columns:52px 1fr 52px;padding:40px 10px}.wrapper.svelte-18jyw10 .message .icon.svelte-18jyw10.svelte-18jyw10{height:30px;width:30px;border-radius:2px;display:flex;align-items:center;justify-content:center}.wrapper.svelte-18jyw10 .message .content.svelte-18jyw10.svelte-18jyw10{color:var(--text-strong);grid-column:2/3;overflow:hidden}@media(max-width: 1080px){.wrapper.svelte-18jyw10.svelte-18jyw10.svelte-18jyw10{margin:0 -60px 0 -60px}.wrapper.from-bot.svelte-18jyw10.svelte-18jyw10.svelte-18jyw10{background:linear-gradient(to right, transparent 0, var(--alt-bg) 50px, var(--alt-bg) calc(var(--page-width) + 50px), transparent calc(var(--page-width) + 100px))}}@media(max-width: 980px){.wrapper.svelte-18jyw10.svelte-18jyw10.svelte-18jyw10{margin:0 calc(-1 * var(--horizontal-padding))}.wrapper.from-bot.svelte-18jyw10.svelte-18jyw10.svelte-18jyw10{background:var(--alt-bg)}.wrapper.svelte-18jyw10 .message.svelte-18jyw10>.icon.svelte-18jyw10{margin-left:var(--horizontal-padding)}}@media(max-width: 880px){.wrapper.svelte-18jyw10.svelte-18jyw10.svelte-18jyw10{margin:0}}@media(max-width: 860px){.wrapper.svelte-18jyw10>.message.svelte-18jyw10.svelte-18jyw10{width:100vw}}@media(max-width: 570px){.wrapper.svelte-18jyw10 .message.svelte-18jyw10.svelte-18jyw10{grid-template-columns:10px 1fr 10px;padding:40px 0}.wrapper.svelte-18jyw10 .message .icon.svelte-18jyw10.svelte-18jyw10{grid-column:2/3;margin:0 0 20px 0}}",
  map: null
};
const ChatGPTMessage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { fromHuman } = $$props;
  if ($$props.fromHuman === void 0 && $$bindings.fromHuman && fromHuman !== void 0)
    $$bindings.fromHuman(fromHuman);
  $$result.css.add(css$2);
  return `<div class="${"wrapper " + escape(fromHuman ? "from-human" : "from-bot", true) + " svelte-18jyw10"}"><div class="${"message svelte-18jyw10"}">${fromHuman === true ? `<div class="${"icon svelte-18jyw10"}">${validate_component(HumanDisplayIcon, "HumanDisplayIcon").$$render($$result, {}, {}, {})}</div>` : `<div class="${"icon svelte-18jyw10"}">${validate_component(ChatbotDisplayIcon, "ChatbotDisplayIcon").$$render($$result, {}, {}, {})}</div>`}
		<div class="${"content svelte-18jyw10"}">${slots.default ? slots.default({}) : ``}</div></div>
</div>`;
});
const MarkdownCodeBlock_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "pre[class*=language-].svelte-zaayvu{background-color:var(--alt-alt-bg);overflow-x:scroll;padding-bottom:10px}@media(max-width: 570px){pre.svelte-zaayvu{width:calc(100vw - 2 * var(--horizontal-padding))}}",
  map: null
};
const MarkdownCodeBlock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { content } = $$props;
  let { lang } = $$props;
  const langClassName = lang ? `language-${lang}` : "";
  const html = Prism$1.highlight(content, Prism$1.languages[lang], lang);
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  if ($$props.lang === void 0 && $$bindings.lang && lang !== void 0)
    $$bindings.lang(lang);
  $$result.css.add(css$1);
  return `


<pre class="${escape(null_to_empty(langClassName), true) + " svelte-zaayvu"}"><code${add_attribute("class", langClassName, 0)}><!-- HTML_TAG_START -->${html}<!-- HTML_TAG_END --></code></pre>`;
});
const creatingFaviconsWithChatgpt_md_svelte_type_style_lang = "";
const css = {
  code: ".md-image-wrapper.svelte-h066l3{display:flex;justify-content:center;margin-bottom:var(--standard-margin-bottom)}",
  map: null
};
const metadata = {
  "title": "Creating favicons with ChatGPT",
  "format": "article",
  "published": "2022-12-26",
  "short": "An attempt at creating web app SVG favicons quickly using ChatGPT.",
  "image": "src/lib/post_images/cover_images/creating-favicons-with-chatgpt.jpg",
  "image_alt": "AI generated image of a pink circuit board"
};
const Creating_favicons_with_chatgpt = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const favicon1 = `<svg width="300" height="300">
    <rect x="0" y="0" width="100" height="100" fill="rgb(245, 169, 188)" />
    <rect x="100" y="0" width="100" height="100" fill="rgb(243, 247, 129)" />
    <rect x="200" y="0" width="100" height="100" fill="rgb(169, 188, 245)" />
    <rect x="0" y="100" width="100" height="100" fill="rgb(169, 245, 208)" />
    <rect x="100" y="100" width="100" height="100" fill="rgb(245, 169, 188)" />
    <rect x="200" y="100" width="100" height="100" fill="rgb(169, 245, 208)" />
    <rect x="0" y="200" width="100" height="100" fill="rgb(169, 188, 245)" />
    <rect x="100" y="200" width="100" height="100" fill="rgb(243, 247, 129)" />
    <rect x="200" y="200" width="100" height="100" fill="rgb(245, 169, 188)" />
  </svg>`;
  const favicon2 = `<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="64" cy="64" r="60" fill="#333333"/>
    <circle cx="64" cy="64" r="56" fill="#EEEEEE"/>
    <circle cx="64" cy="64" r="45" fill="#333333"/>
  </svg>`;
  const faviconLink = `<link rel="icon" type="image/svg+xml" href="/path/to/favicon.svg">`;
  const favicon3 = `<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="64" cy="64" r="60" fill="#333333"/>
    <circle cx="64" cy="64" r="49" fill="#EEEEEE"/>
    <circle cx="64" cy="64" r="45" fill="#333333"/>
  </svg>`;
  const favicon4 = `<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="64" cy="64" r="60" fill="#000"/>
    <circle cx="64" cy="64" r="59" fill="#181818"/>
    <circle cx="64" cy="64" r="51" fill="#000"/>
    <circle cx="64" cy="64" r="50" fill="#181818"/>
    <circle cx="64" cy="64" r="41" fill="#000"/>
    <circle cx="64" cy="64" r="40" fill="#181818"/>
    <circle cx="64" cy="64" r="31" fill="#000"/>
    <circle cx="64" cy="64" r="30" fill="#181818"/>
    <circle cx="64" cy="64" r="22" fill="#000"/>
    <circle cx="64" cy="64" r="20" fill="#f9f2de"/>
    <circle cx="64" cy="64" r="1" fill="#000"/>
  </svg>`;
  const favicon2at300 = favicon2.replaceAll(`"128"`, `"300"`);
  const favicon3at300 = favicon3.replaceAll(`"128"`, `"300"`);
  const favicon4at300 = favicon4.replaceAll(`"128"`, `"300"`);
  const favicon4Html = Prism.highlight(favicon4, Prism.languages.markup, "markup");
  $$result.css.add(css);
  return `<p>Creating favicons is a task that in the past I have found to take hours. It’s not a task I wish to spend so much time on. I attempted to speed up this process using ChatGPT.</p>
<p>Two apps I have developed recently were in need of favicons:</p>
<ul><li><a href="${"https://panel-layout-generator.com/"}" rel="${"nofollow"}">Panel layout generator</a></li>
<li><a href="${"https://crate.guide/"}" rel="${"nofollow"}">Crate Guide</a></li></ul>
<p>The design I had in mind for Panel layout generator was a simple 3×3 grid of colour squares using the demo data from the app.</p>
<p>Here is the conversation:</p>
${validate_component(ChatGPTMessage, "ChatGPTMessage").$$render($$result, { fromHuman: true }, {}, {
    default: () => {
      return `Please create me an svg of a 3x3 grid of colours using this matrix of colours <pre>[
  [&quot;rgb(245, 169, 188)&quot;, &quot;rgb(243, 247, 129)&quot;, &quot;rgb(169, 188, 245)&quot;],
  [&quot;rgb(169, 245, 208)&quot;, &quot;rgb(245, 169, 188)&quot;, &quot;rgb(169, 245, 208)&quot;],
  [&quot;rgb(169, 188, 245)&quot;, &quot;rgb(243, 247, 129)&quot;, &quot;rgb(245, 169, 188)&quot;],
]</pre>`;
    }
  })}
${validate_component(ChatGPTMessage, "ChatGPTMessage").$$render($$result, { fromHuman: false }, {}, {
    default: () => {
      return `<p>Sure! Here&#39;s an SVG that uses your matrix of colors to create a 3x3 grid:</p>
${validate_component(MarkdownCodeBlock, "MarkdownCodeBlock").$$render($$result, { content: favicon1, lang: "markup" }, {}, {})}
  <p>This SVG consists of nine rect elements, each with a fill attribute set to one of the colors in your matrix. The x and y attributes determine the position of each rectangle within the SVG, and the width and height attributes determine the size of each rectangle.</p>
  <p>I hope this helps! Let me know if you have any questions.</p>`;
    }
  })}
<br>
<div class="${"md-image-wrapper svelte-h066l3"}"><!-- HTML_TAG_START -->${favicon1}<!-- HTML_TAG_END --></div>
<p>The SVG was exactly what I wanted. I just added the XML Namespace tag <code class="${"language-markup"}">xmlns=”<a href="${"http://www.w3.org/2000/svg%22"}" rel="${"nofollow"}">http://www.w3.org/2000/svg”</a></code></p>
<hr>
<p>My second attempt at generating a favicon with ChatGPT was for Crate Guide. The design I had in mind was again very simple. I wanted it to look like a vinyl record. This time I defined in my prompt the requirement that the svg be a favicon.</p>
<p>Here is the conversation:</p>
${validate_component(ChatGPTMessage, "ChatGPTMessage").$$render($$result, { fromHuman: true }, {}, {
    default: () => {
      return `Can you please create for me an svg favicon that looks like a vinyl record
`;
    }
  })}
${validate_component(ChatGPTMessage, "ChatGPTMessage").$$render($$result, { fromHuman: false }, {}, {
    default: () => {
      return `<p>Sure! Here is an SVG code snippet that you can use to create a favicon that looks like a vinyl record:</p>
  ${validate_component(MarkdownCodeBlock, "MarkdownCodeBlock").$$render($$result, { content: favicon2, lang: "markup" }, {}, {})}
  <p>This code creates a 128x128 pixel SVG image with three circles. The outermost circle is filled with a dark color and has a radius of 60 pixels. The middle circle is filled with a light color and has a radius of 56 pixels. The innermost circle is filled with a dark color and has a radius of 45 pixels.</p>
  <p>To use this SVG as a favicon, you can save it as a file with the .svg extension and then link to it from the <b>\`&lt;head&gt;\`</b> of your HTML file using the <b>\`&lt;link&gt;\`</b> element like this:</p>
  ${validate_component(MarkdownCodeBlock, "MarkdownCodeBlock").$$render($$result, { content: faviconLink, lang: "markup" }, {}, {})}`;
    }
  })}
<br>
<p>This is the result:</p>
<div class="${"md-image-wrapper svelte-h066l3"}"><!-- HTML_TAG_START -->${favicon2at300}<!-- HTML_TAG_END --></div>
${validate_component(ChatGPTMessage, "ChatGPTMessage").$$render($$result, { fromHuman: true }, {}, {
    default: () => {
      return `Can you change the diameter of the inner circle to 60% of what it is now and half the distance between the middle and outer circles by increasing the inner circle?
`;
    }
  })}
${validate_component(ChatGPTMessage, "ChatGPTMessage").$$render($$result, { fromHuman: false }, {}, {
    default: () => {
      return `Certainly! Here is the modified SVG code snippet that you requested:
  ${validate_component(MarkdownCodeBlock, "MarkdownCodeBlock").$$render($$result, { content: favicon3, lang: "markup" }, {}, {})}
  <p>This code creates an SVG image with the same overall dimensions as the original, but with some changes to the circles. The outermost circle has the same radius as before, but the middle circle has a radius of 49 pixels, which is slightly smaller than the original. The innermost circle has the same radius as before, but it is now positioned closer to the middle circle because the distance between the circles has been reduced.</p>
  <p>The inner circle&#39;s radius is now 45 pixels, which is 60% of the original radius of 75 pixels. The distance between the middle and outer circles has been halved by increasing the inner circle&#39;s radius by 15 pixels (half of the original 30-pixel gap).</p>
  <p>I hope this helps! Let me know if you have any further questions or need additional assistance.</p>`;
    }
  })}
<br>
<p>Unfortunately the result still did not resemble a vinyl record:</p>
<div class="${"md-image-wrapper svelte-h066l3"}"><!-- HTML_TAG_START -->${favicon3at300}<!-- HTML_TAG_END --></div>
<p>The model performed well this time in providing me with attributes on the SVG tag and the html tag required, however it failed to generate a convincing record svg.</p>
<p>I modified the results to achieve the following:</p>
<pre class="${"language-markup"}"><code class="${"language-markup"}"><!-- HTML_TAG_START -->${favicon4Html}<!-- HTML_TAG_END --></code></pre>
<div class="${"md-image-wrapper svelte-h066l3"}"><!-- HTML_TAG_START -->${favicon4at300}<!-- HTML_TAG_END --></div>
<h2>Summary</h2>
<p>Despite the failures of my second attempt, ChatGPT was very helpful in this task. I’ll be looking for opportunities to use it again for more elaborate tasks with better prompts.</p>`;
});
export {
  Creating_favicons_with_chatgpt as default,
  metadata
};
