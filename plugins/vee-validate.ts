import { configure } from 'vee-validate'

export default defineNuxtPlugin((nuxtApp) => {
	configure({
		validateOnBlur: false,
		validateOnInput: true
	})
})
