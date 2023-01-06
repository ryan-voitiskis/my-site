---
title: Stable diffusion collection 2
format: image_collection
published: '2022-12-27'
short: Second collection of my favourite results from using stable diffusion.
image: src/lib/post_images/sd_2/4.jpg
image_alt: AI generated image
---

<script lang="ts">
  import ImageGallery from '$lib/components/ImageGallery.svelte';
	import type ImageData from '$lib/types/ImageData';

  import img1 from '$lib/post_images/sd_2/1.jpg';
  import img2 from '$lib/post_images/sd_2/2.jpg';
  import img3 from '$lib/post_images/sd_2/3.jpg';
  import img4 from '$lib/post_images/sd_2/4.jpg';
  import img5 from '$lib/post_images/sd_2/5.jpg';

  const images: ImageData[] =
    [
      {src: img1, alt: "AI generated image of alien abduction circuitboard hieroglyph."},
      {src: img2, alt: "AI generated image of alien abduction circuitboard hieroglyph."},
      {src: img3, alt: "AI generated image of alien abduction circuitboard hieroglyph."},
      {src: img4, alt: "AI generated image of alien abduction circuitboard hieroglyph."},
      {src: img5, alt: "AI generated image of alien abduction circuitboard hieroglyph."}
    ];
</script>

<ImageGallery images="{images}" />
