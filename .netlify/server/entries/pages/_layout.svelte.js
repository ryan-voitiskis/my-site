import {
	c as create_ssr_component,
	b as add_attribute,
	d as subscribe,
	v as validate_component
} from '../../chunks/index.js'
import { p as page } from '../../chunks/stores.js'
const lightTheme = ''
const darkTheme = ''
const dimensions = ''
const prismCustom = ''
const global = ''
const _400$1 = ''
const _500$1 = ''
const _600$1 = ''
const _400 = ''
const _500 = ''
const _600 = ''
const index$1 = ''
const index = ''
const ThemeToggle_svelte_svelte_type_style_lang = ''
const css$1 = {
	code: '.theme-toggle.svelte-uhfhf0.svelte-uhfhf0.svelte-uhfhf0{--toggle-width:44px;--toggle-height:28px;--gutter:2px;--toggle-radius:calc(var(--toggle-height) / 2);--theme-toggle-size:calc(var(--toggle-height) - (var(--gutter) * 2));cursor:pointer;display:block;font-size:22px;margin-top:-28px;padding-left:var(--toggle-width);position:relative;user-select:none}.theme-toggle.svelte-uhfhf0 input.svelte-uhfhf0.svelte-uhfhf0{position:absolute;height:0;opacity:0;width:0}.theme-toggle.svelte-uhfhf0 input.svelte-uhfhf0:checked~.control.svelte-uhfhf0:after{left:calc(var(--toggle-width) - var(--theme-toggle-size) - var(--gutter));background-image:url("$lib/svg/moon.svg")}.theme-toggle.svelte-uhfhf0 .control.svelte-uhfhf0.svelte-uhfhf0{position:absolute;top:0;left:0;height:var(--toggle-height);width:var(--toggle-width);border-radius:calc(var(--toggle-height) / 2);background-color:var(--theme-toggle-bg);transition:background-color 200ms}.theme-toggle.svelte-uhfhf0 .control.svelte-uhfhf0.svelte-uhfhf0:after{content:"";background-image:url("$lib/svg/sun.svg");background-size:24px 24px;background-color:var(--page-bg);position:absolute;left:var(--gutter);top:var(--gutter);width:var(--theme-toggle-size);height:var(--theme-toggle-size);border-radius:calc(var(--toggle-height) / 2);transition:left 200ms ease-in, background-color 200ms ease-in}',
	map: null
}
const ThemeToggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let darkTheme2 = false
	$$result.css.add(css$1)
	return `<label class="${'theme-toggle svelte-uhfhf0'}"><input type="${'checkbox'}" class="${'svelte-uhfhf0'}"${add_attribute(
		'checked',
		darkTheme2,
		1
	)}>
	<span class="${'control svelte-uhfhf0'}"></span>
</label>`
})
const _layout_svelte_svelte_type_style_lang = ''
const css = {
	code: ':root{--sans-serif-font:"Urbanist", sans-serif;--serif-font:"Crimson Pro", serif;--monospace-font:"Source Code Pro", monospace;--nav-font:"Space Mono", monospace}header.svelte-16p1xve.svelte-16p1xve{max-width:var(--page-width);margin:0 auto}header.svelte-16p1xve.svelte-16p1xve{display:flex;justify-content:space-between;align-items:center;padding:20px var(--horizontal-padding)}nav.svelte-16p1xve.svelte-16p1xve{display:flex;font-family:var(--nav-font);gap:20px;line-height:28px;margin-bottom:20px}nav.svelte-16p1xve a.svelte-16p1xve{color:var(--nav-text);margin-right:1rem;text-decoration:none}nav.svelte-16p1xve a.svelte-16p1xve:hover{color:var(--nav-text-hover)}nav.svelte-16p1xve a.active.svelte-16p1xve{text-decoration:underline;text-decoration-color:var(--nav-underline);text-decoration-thickness:0.1rem}@media(max-width: 400px){nav.svelte-16p1xve.svelte-16p1xve{gap:10px}}@media(max-width: 360px){nav.svelte-16p1xve.svelte-16p1xve{gap:0}}',
	map: null
}
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $page, $$unsubscribe_page
	$$unsubscribe_page = subscribe(page, (value) => ($page = value))
	let { data } = $$props
	if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data)
	$$result.css.add(css)
	$$unsubscribe_page()
	return `<header class="${'svelte-16p1xve'}"><nav class="${'svelte-16p1xve'}"><a href="${'/'}" class="${[
		'svelte-16p1xve',
		$page.route.id === '/' ? 'active' : ''
	]
		.join(' ')
		.trim()}">about</a>
		<a href="${'/blog'}" class="${['svelte-16p1xve', $page.route.id === '/blog' ? 'active' : '']
		.join(' ')
		.trim()}">blog</a>
		<a href="${'/projects'}" class="${['svelte-16p1xve', $page.route.id === '/projects' ? 'active' : '']
		.join(' ')
		.trim()}">projects</a></nav>
	${validate_component(ThemeToggle, 'ThemeToggle').$$render($$result, {}, {}, {})}</header>
${slots.default ? slots.default({}) : ``}`
})
export { Layout as default }
