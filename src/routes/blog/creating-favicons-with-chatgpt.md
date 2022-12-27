---
title: Creating favicons with ChatGPT
date: '2022-12-26'
---

<script>
import ChatGPTMessage from '$lib/components/ChatGPTMessage.svelte'
import MarkdownCodeBlock from '$lib/components/MarkdownCodeBlock.svelte'

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
</svg>`

const favicon2 = `<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="64" cy="64" r="60" fill="#333333"/>
  <circle cx="64" cy="64" r="56" fill="#EEEEEE"/>
  <circle cx="64" cy="64" r="45" fill="#333333"/>
</svg>`

const faviconLink = `<link rel="icon" type="image/svg+xml" href="/path/to/favicon.svg">`

const favicon3 = `<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="64" cy="64" r="60" fill="#333333"/>
  <circle cx="64" cy="64" r="49" fill="#EEEEEE"/>
  <circle cx="64" cy="64" r="45" fill="#333333"/>
</svg>`

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
</svg>`

const favicon2at300 = favicon2.replaceAll(`"128"`, `"300"`)
const favicon3at300 = favicon3.replaceAll(`"128"`, `"300"`)
const favicon4at300 = favicon4.replaceAll(`"128"`, `"300"`)


const favicon4Html = Prism.highlight(favicon4, Prism.languages.markup, 'markup')

</script>

Creating favicons is a task that in the past I have found to take hours. It's not a task I wish to spend so much time on. I attempted to speed up this process using ChatGPT.

Two apps I have developed recently were in need of favicons:

- [Panel layout generator](https://panel-layout-generator.com/)
- [Crate Guide](https://crate.guide/)

The design I had in mind for Panel layout generator was a simple 3×3 grid of colour squares using the demo data from the app.

Here is the conversation:

<ChatGPTMessage fromHuman="{true}">
Please create me an svg of a 3x3 grid of colours using this matrix of colours <pre>[
["rgb(245, 169, 188)", "rgb(243, 247, 129)", "rgb(169, 188, 245)"],
["rgb(169, 245, 208)", "rgb(245, 169, 188)", "rgb(169, 245, 208)"],
["rgb(169, 188, 245)", "rgb(243, 247, 129)", "rgb(245, 169, 188)"],
]</pre>
</ChatGPTMessage>

<ChatGPTMessage fromHuman="{false}">
<p>Sure! Here's an SVG that uses your matrix of colors to create a 3x3 grid:</p>
<MarkdownCodeBlock content="{favicon1}" lang="markup"/>

<p>This SVG consists of nine rect elements, each with a fill attribute set to one of the colors in your matrix. The x and y attributes determine the position of each rectangle within the SVG, and the width and height attributes determine the size of each rectangle.</p>

<p>I hope this helps! Let me know if you have any questions.</p>
</ChatGPTMessage>
<br />

This is the result:

<div class="md-image-wrapper">
{@html favicon1}
</div>

The SVG was exactly what I wanted. I just added the XML Namespace tag:

```markup
xmlns="http://www.w3.org/2000/svg"
```

---

My second attempt at generating a favicon with ChatGPT was for Crate Guide. The design I had in mind was again very simple. I wanted it to look like a vinyl record. This time I defined in my prompt the requirement that the svg be a favicon.

Here is the conversation:

<ChatGPTMessage fromHuman="{true}">
Can you please create for me an svg favicon that looks like a vinyl record
</ChatGPTMessage>

<ChatGPTMessage fromHuman="{false}">

<p>Sure! Here is an SVG code snippet that you can use to create a favicon that looks like a vinyl record:</p>
<MarkdownCodeBlock content="{favicon2}" lang="markup"/>

<p>This code creates a 128x128 pixel SVG image with three circles. The outermost circle is filled with a dark color and has a radius of 60 pixels. The middle circle is filled with a light color and has a radius of 56 pixels. The innermost circle is filled with a dark color and has a radius of 45 pixels.</p>

<p>To use this SVG as a favicon, you can save it as a file with the .svg extension and then link to it from the <b>`&lt;head&gt;`</b> of your HTML file using the <b>`&lt;link&gt;`</b> element like this:</p>
<MarkdownCodeBlock content="{faviconLink}" lang="markup"/>
</ChatGPTMessage>
<br />

This is the result:

<div class="md-image-wrapper">
{@html favicon2at300}
</div>

Conversation continued:

<ChatGPTMessage fromHuman="{true}">
Can you change the diameter of the inner circle to 60% of what it is now and half the distance between the middle and outer circles by increasing the inner circle?
</ChatGPTMessage>

<ChatGPTMessage fromHuman="{false}">

Certainly! Here is the modified SVG code snippet that you requested:
<MarkdownCodeBlock content="{favicon3}" lang="markup"/>

<p>This code creates an SVG image with the same overall dimensions as the original, but with some changes to the circles. The outermost circle has the same radius as before, but the middle circle has a radius of 49 pixels, which is slightly smaller than the original. The innermost circle has the same radius as before, but it is now positioned closer to the middle circle because the distance between the circles has been reduced.</p>

<p>The inner circle's radius is now 45 pixels, which is 60% of the original radius of 75 pixels. The distance between the middle and outer circles has been halved by increasing the inner circle's radius by 15 pixels (half of the original 30-pixel gap).</p>

<p>I hope this helps! Let me know if you have any further questions or need additional assistance.</p>
</ChatGPTMessage>
<br />

Unfortunately the result still did not resemble a vinyl record:

<div class="md-image-wrapper">
{@html favicon3at300}
</div>

The model performed well in providing me an SVG tag with more attributes, plus the html tag required, but it failed to generate a convincing record svg.

I modified the results to achieve the following and provided my modifications in the feedback:

<pre class="language-markup"><code class="language-markup">{@html favicon4Html}</code></pre>

<div class="md-image-wrapper">
{@html favicon4at300}
</div>

## Summary

Despite the failures of my second attempt, ChatGPT proved to be very helpful in this task. I look forward to making use of these models for creating SVGs in the future.

<style lang="scss">
.md-image-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: var(--standard-margin-bottom);
}
</style>
