<script lang="ts">
	import NavLink from '$components/nav-link.svelte';
	import { resolve } from '$app/paths';
	import { cn } from './utils';

	type Page = {
		label: string;
		pathname: string;
	};

	type Props = {
		pages: Page[];
		class: string;
	};

	let { pages, class: className }: Props = $props();
</script>

<ul class={cn('font-bold transition-colors', className)}>
	{#each pages as page (page.pathname)}
		<li>
			<NavLink href={resolve(page.pathname)}>{page.label}</NavLink>
		</li>
	{/each}
</ul>
