<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Logo from '$components/logo.svelte';
	import NavLink from '$components/nav-link.svelte';
	import { resolve } from '$app/paths';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div
	class="grid min-h-dvh grid-cols-[1fr_4fr_1fr] grid-rows-[70px_0_auto_100px] bg-linear-to-b from-olive-50 to-olive-100 [grid-template-areas:'header_header_header'_'._hero_.'_'._section_.'_'footer_footer_footer'] has-[main]:grid-rows-[70px_calc(100vh-70px)_auto_100px]"
>
	<header class="grid grid-cols-6 items-center justify-center shadow-sm [grid-area:header]">
		<div class="flex justify-center"><Logo></Logo></div>
		<ul class="col-span-4 flex justify-center gap-16 font-bold transition-colors">
			<li>
				<NavLink href={resolve('/')}>Présentation</NavLink>
			</li>
			<li><NavLink href={resolve('/contact')}>Contact & RDV</NavLink></li>
			<li><NavLink href={resolve('/tcc')}>TCC</NavLink></li>
			<li><NavLink href={resolve('/resources')}>Ressources</NavLink></li>
		</ul>
	</header>
	{@render children()}
	<footer class="flex flex-col justify-between py-2 inset-shadow-sm [grid-area:footer]">
		<div></div>
		<div class="prose-sm text-center">Copyright (c) 2026 Author. All Rights Reserved.</div>
	</footer>
</div>
