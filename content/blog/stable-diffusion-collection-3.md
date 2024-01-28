---
title: Stable diffusion collection 3
format: image_collection
published: '2022-12-27'
short: Third collection of my favourite results from using stable diffusion.
image: cover_images/sd3.jpg
image_alt: AI generated image
---

<script lang="ts">
  import ImageGallery from '$lib/components/ImageGallery.svelte';
	import type ImageData from '$lib/types/ImageData';

  import img1 from '$lib/post_images/sd3/1.jpg';
  import img2 from '$lib/post_images/sd3/2.jpg';
  import img3 from '$lib/post_images/sd3/3.jpg';
  import img4 from '$lib/post_images/sd3/4.jpg';
  import img5 from '$lib/post_images/sd3/5.jpg';
  import img6 from '$lib/post_images/sd3/6.jpg';
  import img7 from '$lib/post_images/sd3/7.jpg';
  import img8 from '$lib/post_images/sd3/8.jpg';
  import img9 from '$lib/post_images/sd3/9.jpg';

  const images: ImageData[] =
    [
      {src: img1, alt: "Stable Diffusion generated image of an ancient alien."},
      {src: img2, alt: "Stable Diffusion generated image of an ancient alien."},
      {src: img3, alt: "Stable Diffusion generated image of an ancient alien."},
      {src: img4, alt: "Stable Diffusion generated image of an ancient alien."},
      {src: img5, alt: "Stable Diffusion generated image of an ancient alien."},
      {src: img6, alt: "Stable Diffusion generated image of an ancient alien."},
      {src: img7, alt: "Stable Diffusion generated image of an ancient alien."},
      {src: img8, alt: "Stable Diffusion generated image of an ancient alien."},
      {src: img9, alt: "Stable Diffusion generated image of an ancient alien."}
    ];
</script>

<ImageGallery images="{images}" />
