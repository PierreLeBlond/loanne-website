<script lang="ts">
	import SvelteMarkdown from '@humanspeak/svelte-markdown';
	import Article from '$components/article.svelte';
	import ResourceLink from '$components/resource-link.svelte';
	import { flip } from 'svelte/animate';
	import { resolve } from '$app/paths';
	import { cn } from '$components/utils';
	import { fade, fly } from 'svelte/transition';
	import type { LayoutProps } from './$types';

	let { data, children }: LayoutProps = $props();

	let categories = $derived(
		data.categories
			.map((category) => ({
				...category,
				resources: category.resources.filter(
					(resource) => data.filter == 'all' || resource.filters.includes(data.filter)
				)
			}))
			.filter((category) => category.resources.length > 0)
	);
</script>

<p class="w-full p-4 text-center text-sm text-slate-600">Filtres</p>
<div class="flex w-full justify-center gap-2 px-4">
	{#each data.filters as filter}
		<a
			class={cn(
				'transition-color rounded-sm border border-primary/20 bg-primary/30 px-2 py-1.5 text-center text-xs font-bold text-nowrap text-primary/20 shadow-sm hover:border-primary hover:text-primary sm:text-sm',
				data.filter == filter.id && 'border-primary text-primary'
			)}
			href={resolve('/resources/[filter]', { filter: filter.id })}>{filter.label}</a
		>
	{/each}
</div>

{@render children()}

<section
	class="flex w-full flex-col items-start justify-center gap-16 pt-8 pb-16 [grid-area:section] lg:pt-16"
>
	<Article>
		<h2>RESSOURCES</h2>
		{#each categories as category (category.label)}
			<div in:fly={{ x: -100 }} out:fly={{ x: 100 }}>
				<h4>{category.label}</h4>
				<ul>
					{#each category.resources as resource (resource.content)}
						<li
							animate:flip={{ duration: 1000 / category.resources.length }}
							in:fade
							out:fly={{ x: 100 }}
						>
							<SvelteMarkdown source={resource.content} renderers={{ link: ResourceLink }}
							></SvelteMarkdown>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</Article>
</section>
