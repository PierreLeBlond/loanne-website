<script lang="ts">
	import SvelteMarkdown from '@humanspeak/svelte-markdown';
	import location from '$content/location.md?raw';
	import tarifs from '$content/tarifs.md?raw';
	import description from '$content/description.md?raw';
	import competences from '$content/competences.md?raw';
	import PerfactiveLink from '$components/perfactive-link.svelte';
	import Fern from '$components/fern.svelte';
</script>

<main class="aligns-items-center grid grid-rows-4 gap-8 pt-16 [grid-area:hero]">
	<div class="flex w-full items-end justify-between gap-16">
		<img src="/profil.jpg" class="aspect-square h-full rounded-sm shadow-sm" />
		<article class="prose max-w-none prose-p:indent-6">
			<SvelteMarkdown source={description}></SvelteMarkdown>
		</article>
	</div>

	<div class="flex w-full items-center justify-center"><Fern></Fern></div>

	<div class="grid grid-cols-3 grid-rows-2">
		<div class="row-span-2 prose grid grid-rows-subgrid justify-items-center prose-p:my-0">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="32"
				height="32"
				viewBox="0 0 24 24"
				fill="none"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="stroke-teal-900"
				><path
					d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"
				/><circle cx="12" cy="8" r="2" /><path
					d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"
				/></svg
			>
			<div class="prose prose-p:my-0">
				<SvelteMarkdown source={location}></SvelteMarkdown>
			</div>
		</div>
		<div class="row-span-2 grid grid-rows-subgrid justify-items-center">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="32"
				height="32"
				viewBox="0 0 24 24"
				fill="none"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="stroke-teal-900"
				><rect width="20" height="14" x="2" y="5" rx="2" /><line
					x1="2"
					x2="22"
					y1="10"
					y2="10"
				/></svg
			>

			<div class="prose prose-p:my-0">
				<SvelteMarkdown source={tarifs}></SvelteMarkdown>
			</div>
		</div>
		<div class="row-span-2 grid grid-rows-subgrid justify-items-center">
			<div></div>
			<PerfactiveLink></PerfactiveLink>
		</div>
	</div>

	<div class="flex w-full items-center justify-center">
		<a href="/#competences" class="group"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				width="64"
				height="64"
				viewBox="0 0 24 24"
				fill="none"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="stroke-teal-900 transition-transform group-hover:translate-y-4"
				><path d="m6 9 6 6 6-6" /></svg
			></a
		>
	</div>
</main>

<section id="competences" class="flex w-full items-center justify-center py-16 [grid-area:section]">
	<article class="prose max-w-none prose-p:indent-6">
		<SvelteMarkdown source={competences}></SvelteMarkdown>
	</article>
</section>
