/*
 * uses the class attribute of <html> as state and persists it in local storage.
 * the theme is set to dark if the user prefers dark mode.
 * a MutationObserver listens for changes to the class attribute of <html>
 *
 * the minified version of this code is exported as a string.
 * this must be added to the head of the document to avoid a fart
 * see: https://css-tricks.com/flash-of-inaccurate-color-theme-fart/
 *
 * the 'dark' class is toggled in the <html> classList from ThemeToggle.vue
 */

function dontRun() {
	//        ^ so we dont run at compile, but can look at it unminified

	const preference =
		localStorage.getItem('theme') ??
		(window.matchMedia('(prefers-color-scheme: dark)').matches
			? 'dark'
			: 'light')
	document.documentElement.classList.toggle('dark', preference === 'dark')

	const observer = new MutationObserver(() => {
		const isDark = document.documentElement.classList.contains('dark')
		localStorage.setItem('theme', isDark ? 'dark' : 'light')
	})
	observer.observe(document.documentElement, {
		attributes: true,
		attributeFilter: ['class']
	})
}

// a minified version of the above code in an IIFE
export default `(()=>{const t=localStorage.getItem('theme')??(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.classList.toggle('dark',t==='dark');const o=new MutationObserver(()=>{localStorage.setItem('theme',document.documentElement.classList.contains('dark')?'dark':'light')});o.observe(document.documentElement,{attributes:true,attributeFilter:['class']})})();`
