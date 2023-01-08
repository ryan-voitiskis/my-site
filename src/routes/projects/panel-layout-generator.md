---
title: Crate Guide
url: https://crate.guide/
---

<script lang="ts">
  import ImageGallery from '$lib/components/ImageGallery.svelte';
	import type ImageData from '$lib/types/ImageData';

  import img1 from '$lib/post_images/sd_1/1.jpg';
  import img2 from '$lib/post_images/sd_1/2.jpg';
  import img3 from '$lib/post_images/sd_1/3.jpg';
  import img4 from '$lib/post_images/sd_1/4.jpg';

  const images: ImageData[] =
    [
      {src: img1, alt: "AI generated image of an interdimensional alien woman casting a spell."},
      {src: img2, alt: "AI generated image of an alien abduction."},
      {src: img3, alt: "AI generated image of an interdimensional alien woman casting a spell."},
      {src: img4, alt: "AI generated image of an alien dance party"}
    ];
</script>

<ImageGallery images="{images}" />