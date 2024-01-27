---
title: Stable diffusion collection 1
format: image_collection
published: '2022-12-12'
short: First collection of my favourite results from using stable diffusion.
image: cover_images/sd1.jpg
image_alt: AI generated image
---

<script lang="ts">
  import ImageGallery from '$lib/components/ImageGallery.svelte';
	import type ImageData from '$lib/types/ImageData';

  import img1 from '$lib/post_images/sd1/1.jpg';
  import img2 from '$lib/post_images/sd1/2.jpg';
  import img3 from '$lib/post_images/sd1/3.jpg';
  import img4 from '$lib/post_images/sd1/4.jpg';

  const images: ImageData[] =
    [
      {src: img1, alt: "Stable Diffusion generated image of an interdimensional alien woman casting a spell."},
      {src: img2, alt: "Stable Diffusion generated image of an alien abduction."},
      {src: img3, alt: "Stable Diffusion generated image of an interdimensional alien woman casting a spell."},
      {src: img4, alt: "Stable Diffusion generated image of an alien dance party"}
    ];
</script>

<ImageGallery images="{images}" />
