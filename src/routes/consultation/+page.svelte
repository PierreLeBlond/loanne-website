<script lang="ts">
	import SvelteMarkdown from '@humanspeak/svelte-markdown';
	import contact from '$content/contact.md?raw';
	import PerfactiveLink from '$components/perfactive-link.svelte';
	import attente from './attente.jpg';
	import cabinet from './cabinet.jpg';
	import Article from '$components/article.svelte';
</script>

<section
	class="flex w-full flex-col items-center justify-center gap-16 pt-16 pb-16 [grid-area:section]"
>
	<PerfactiveLink></PerfactiveLink>
	<div class="grid grid-cols-1 gap-4 p-4 lg:grid-cols-2 lg:gap-4 lg:gap-16">
		<figure class="flex flex-col gap-4">
			<img
				class="size-full rounded-sm object-cover shadow-sm"
				src={attente}
				alt="salle d'attente"
			/>
			<figcaption class="text-center text-gray-600">Salle d'attente</figcaption>
		</figure>
		<figure class="flex flex-col gap-4">
			<img class="size-full rounded-sm object-cover shadow-sm" src={cabinet} alt="cabinet" />
			<figcaption class="text-center text-gray-600">Cabinet</figcaption>
		</figure>
	</div>
	<Article class="-order-1 lg:order-1 prose-p:my-0">
		<SvelteMarkdown source={contact}></SvelteMarkdown>
	</Article>
</section>
