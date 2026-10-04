<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from './utils';

	type Props = {
		children: Snippet;
		class?: string;
	};

	let { children, class: className }: Props = $props();
</script>

<div
	class={cn(
		'prose max-w-none prose-p:text-justify prose-p:indent-6 prose-li:marker:text-slate-800',
		className
	)}
>
	{@render children()}
</div>

<style>
	:global(li p) {
		text-indent: 0px;
	}

	:global(p a) {
		word-break: break-all;
	}
</style>
