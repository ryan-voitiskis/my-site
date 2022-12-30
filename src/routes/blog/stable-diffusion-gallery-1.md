---
title: Stable diffusion collection 1
published: '2022-12-12'
short: A collection of my favourite results from using stable diffusion.
---

<script>
  import ImageGallery from '$lib/components/ImageGallery.svelte'
  import sd6 from '$lib/post-images/sd_1/sd6.jpg';
  import sd7 from '$lib/post-images/sd_1/sd7.jpg';
  import sd8 from '$lib/post-images/sd_1/sd8.jpg';
  import sd9 from '$lib/post-images/sd_1/sd9.jpg';

  const images = [sd7, sd6, sd8, sd9]
</script>

<ImageGallery images="{images}" />
