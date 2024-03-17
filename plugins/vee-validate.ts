import { configure } from 'vee-validate'

export default defineNuxtPlugin((nuxtApp) => {
	// configure vee-validate here
	configure({
		validateOnInput: true
	})
})
