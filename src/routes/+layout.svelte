<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Logo from '$components/logo.svelte';
	import { fly } from 'svelte/transition';
	import Menu from '$components/menu.svelte';
	import { onNavigate } from '$app/navigation';
	import { PUBLIC_BASE_PATH } from '$env/static/public';

	let { data, children } = $props();

	let transitToRight = $state(false);

	let toSection = $state('');

	onNavigate(({ from, to }) => {
		const sections = data.pages.map(({ section }) => section);
		const fromPathname = from?.url.pathname ?? '';
		const fromSection = fromPathname.split(PUBLIC_BASE_PATH || '/', 2)[1];
		const toPathname = to?.url.pathname ?? '';
		toSection = toPathname.split(PUBLIC_BASE_PATH || '/', 2)[1];
		transitToRight = sections.indexOf(fromSection) < sections.indexOf(toSection);
	});
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div
	class="grid min-h-dvh grid-cols-[16px_1fr_16px] grid-rows-[70px_auto_60px] overflow-x-hidden bg-secondary font-default [grid-template-areas:'header_header_header'_'._content_.'_'footer_footer_footer'] sm:grid-cols-[1fr_640px_1fr] lg:grid-cols-[1fr_1024px_1fr]"
>
	{#key toSection}
		<div
			class="relative w-full [grid-area:content] sm:px-8"
			in:fly={{ x: transitToRight ? '100%' : '-100%' }}
			out:fly={{ x: transitToRight ? '-100%' : '100%' }}
		>
			{@render children()}
		</div>
	{/key}
	<header
		class="flex items-center justify-between px-4 shadow-sm [grid-area:header] sm:px-8 lg:px-16"
	>
		<div class="flex justify-center md:col-span-2 xl:col-span-1"><Logo></Logo></div>
		<Menu pages={data.pages} class="col-span-4 hidden justify-center gap-16 lg:flex"></Menu>
		<div class="grid grid-cols-1 grid-rows-1">
			<button title="menu" class="peer col-start-1 row-start-1 hover:cursor-pointer lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class=""><path d="M4 5h16" /><path d="M4 12h16" /><path d="M4 19h16" /></svg
				>
			</button>
			<button
				title="menu"
				class="col-start-1 row-start-1 hidden peer-focus:block hover:cursor-pointer lg:hidden"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class=""><path d="M4 5h16" /><path d="M4 12h16" /><path d="M4 19h16" /></svg
				>
			</button>
			<div
				class="pointer-events-none fixed top-[70px] left-0 block size-full bg-gray-800 opacity-0 transition-opacity peer-focus:pointer-events-auto peer-focus:opacity-45"
			></div>
			<div
				class="fixed top-16 left-0 h-0 w-full overflow-hidden bg-secondary shadow-sm transition-all peer-focus:h-40 hover:h-40"
			>
				<Menu pages={data.pages} class="flex flex-col items-center justify-center p-8"></Menu>
			</div>
		</div>
	</header>

	<footer class="flex flex-col justify-center py-2 shadow-top [grid-area:footer] sm:justify-end">
		<div class="prose-sm text-center text-xs sm:text-sm">
			© 2026 Loanne Meuret Marcucci. Tous droits réservés.
		</div>
		<div class="text-center text-xs text-gray-600">Fait avec amour par Pierre Lespingal</div>
	</footer>
</div>
