<script lang="ts">
	import { cn } from '$components/utils';
	import { page } from '$app/state';
	import type { Snippet } from 'svelte';

	type Props = {
		href: string;
		children: Snippet;
	};

	let { href, children }: Props = $props();
</script>

<a {href} class={cn(page.url.pathname == href && 'text-teal-900')}>{@render children()}</a>
