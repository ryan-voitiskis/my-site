// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	telemetry: false,
	modules: ['@nuxtjs/tailwindcss', '@nuxtjs/eslint-module', '@vueuse/nuxt']
})
