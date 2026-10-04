<script lang="ts">
	import SvelteMarkdown from '@humanspeak/svelte-markdown';
	import location from '$content/location.md?raw';
	import tarifs from '$content/tarifs.md?raw';
	import description from '$content/description.md?raw';
	import competences from '$content/competences.md?raw';
	import PerfactiveLink from '$components/perfactive-link.svelte';
	import Fern from '$components/fern.svelte';
	import { asset, resolve } from '$app/paths';
	import Article from '$components/article.svelte';

	let { data } = $props();
</script>

<main class="flex flex-col gap-8 px-2 pt-16 sm:px-0 lg:grid lg:h-[calc(100vh-70px)] lg:grid-rows-5">
	<div
		class="align-center row-span-2 flex w-full grid-cols-4 grid-rows-2 flex-col items-center justify-items-center gap-4 sm:p-8 lg:grid"
	>
		<img
			src={asset('/profil.jpg')}
			class="col-span-1 row-span-2 hidden aspect-square rounded-sm shadow-md lg:block"
			alt="portrait de Loanne Meuret Marcucci"
		/>

		<article
			class="col-span-3 row-span-1 flex max-w-none flex-col items-center text-justify sm:block"
		>
			<img
				src={asset('/profil.jpg')}
				class="mx-8 mb-2 aspect-square h-full w-[30%] min-w-32 rounded-sm shadow-md sm:float-left lg:hidden"
				alt="portrait de Loanne Meuret Marcucci"
			/>
			<Article>
				<SvelteMarkdown source={description}></SvelteMarkdown>
			</Article>
		</article>
		<ul class="col-span-3 row-span-1 flex flex-wrap gap-2 lg:px-16">
			{#each data.keywords as keyword (keyword)}
				<li
					class="rounded-sm border border-primary bg-primary/30 px-2 py-1.5 text-center text-xs font-bold text-nowrap text-primary shadow-sm sm:text-sm"
				>
					{keyword}
				</li>
			{/each}
		</ul>
	</div>

	<div
		class="row-span-2 flex flex-col gap-y-8 sm:grid sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2"
	>
		<div class="row-span-2 flex items-center justify-center">
			<div
				class="flex aspect-square w-full max-w-52 flex-col items-center justify-center gap-4 rounded-md border border-primary/40 p-4 shadow-xl shadow-primary/20"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					viewBox="0 0 24 24"
					fill="none"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="stroke-primary"
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
		</div>

		<div class="row-span-2 flex items-center justify-center">
			<div
				class="flex aspect-square w-full max-w-52 flex-col items-center justify-center gap-4 rounded-md border border-primary/40 p-4 shadow-xl shadow-primary/20"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					viewBox="0 0 24 24"
					fill="none"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="stroke-primary"
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
		</div>

		<div
			class="relative col-span-2 row-span-2 grid grid-rows-subgrid place-items-center justify-items-center pt-40 lg:col-span-1 lg:py-10 lg:pt-0"
		>
			<div
				class="absolute -top-20 flex w-64 items-center justify-center lg:relative lg:-top-8 lg:w-full"
			>
				<Fern></Fern>
			</div>
			<PerfactiveLink></PerfactiveLink>
		</div>
	</div>

	<div class="hidden w-full items-center justify-center lg:flex">
		<a href={resolve('/#competences')} class="group"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				width="64"
				height="64"
				viewBox="0 0 24 24"
				fill="none"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="stroke-primary transition-transform group-hover:translate-y-4"
				><path d="m6 9 6 6 6-6" /></svg
			></a
		>
	</div>
</main>

<section id="competences" class="flex w-full items-center justify-center py-16 [grid-area:section]">
	<Article>
		<SvelteMarkdown source={competences}></SvelteMarkdown>
	</Article>
</section>
