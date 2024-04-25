// loads lazy images after 300ms of idle time

export default (() => {
	if (typeof window === 'undefined') return
	document.addEventListener('DOMContentLoaded', function () {
		const lazyImages = document.querySelectorAll('img[loading=lazy]')

		if ('requestIdleCallback' in window)
			requestIdleCallback(() => {
				setTimeout(() => {
					lazyImages.forEach((img) => img.setAttribute('loading', 'auto'))
				}, 700)
			})
	})
})()
