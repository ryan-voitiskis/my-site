---
title: Stable diffusion collection 4
format: image_collection
published: '2022-12-27'
short: Fourth collection of my favourite results from using stable diffusion.
image: cover_images/sd4.jpg
image_alt: AI generated image
---

<script lang="ts">
  import ImageGallery from '$lib/components/ImageGallery.svelte';
	import type ImageData from '$lib/types/ImageData';

  import img1 from '$lib/post_images/sd4/1.jpg';
  import img2 from '$lib/post_images/sd4/2.jpg';
  import img3 from '$lib/post_images/sd4/3.jpg';
  import img4 from '$lib/post_images/sd4/4.jpg';
  import img5 from '$lib/post_images/sd4/5.jpg';
  import img6 from '$lib/post_images/sd4/6.jpg';

  const images: ImageData[] =
    [
      {src: img1, alt: "Stable Diffusion generated image of an ancient alien."},
      {src: img2, alt: "Stable Diffusion generated image of an ancient alien."},
      {src: img3, alt: "Stable Diffusion generated image of an ancient alien."},
      {src: img4, alt: "Stable Diffusion generated image of an ancient alien."},
      {src: img5, alt: "Stable Diffusion generated image of an ancient alien."},
      {src: img6, alt: "Stable Diffusion generated image of an ancient alien."}
    ];
</script>

<ImageGallery images="{images}" />
