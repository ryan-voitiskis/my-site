---
title: DALL·E collection 1
format: image_collection
published: '2023-01-13'
short: Some interesting DALL·E 2 results.
image: cover_images/dall-e1.png
image_alt: AI generated image
---

<script lang="ts">
  import ImageGallery from '$lib/components/ImageGallery.svelte';
	import type ImageData from '$lib/types/ImageData';

  import img0 from '$lib/post_images/dall-e1/0.png';
  import img1 from '$lib/post_images/dall-e1/1.png';
  import img2 from '$lib/post_images/dall-e1/2.png';
  import img3 from '$lib/post_images/dall-e1/3.png';
  import img4 from '$lib/post_images/dall-e1/4.png';
  import img5 from '$lib/post_images/dall-e1/5.png';
  import img6 from '$lib/post_images/dall-e1/6.png';
  import img7 from '$lib/post_images/dall-e1/7.png';
  import img8 from '$lib/post_images/dall-e1/8.png';
  import img9 from '$lib/post_images/dall-e1/9.png';

  const altPrefix = `DALL·E 2 generated image of `

  const images: ImageData[] =
    [
      {src: img0, alt: `${altPrefix}two humanoid robots creating human life.`},
      {src: img1, alt: `${altPrefix}two monkeys with glasses building neural networks.`},
      {src: img2, alt: `${altPrefix}two monkeys manipulating a large physical network by hand.`},
      {src: img3, alt: `${altPrefix}a drawing of two monkeys manipulating a large physical network by hand.`},
      {src: img4, alt: `${altPrefix}a mycelium ghost.`},
      {src: img5, alt: `${altPrefix}a mycelium ghost.`},
      {src: img6, alt: `${altPrefix}an ancient tribesman walking through a jungle portal.`},
      {src: img7, alt: `${altPrefix}a painting of an evil horned monster.`},
      {src: img8, alt: `${altPrefix}a painting of bipedal, white rat like creatures in a dark room.`},
      {src: img9, alt: `${altPrefix}a powerful witch performing a ritual`},
    ];
</script>

<ImageGallery images="{images}" />
