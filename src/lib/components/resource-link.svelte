<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		href?: string;
		title?: string;
		children?: Snippet;
	}

	const { href = '', title = undefined, children }: Props = $props();
</script>

<a {href} {title} target="_blank" rel="noopener noreferrer">
	{@render children?.()}
</a>
