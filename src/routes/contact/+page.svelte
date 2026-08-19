<script lang="ts">
	import SvelteMarkdown from '@humanspeak/svelte-markdown';
	import contact from '$content/contact.md?raw';
	import PerfactiveLink from '$components/perfactive-link.svelte';
</script>

<section class="flex w-full flex-col items-center justify-center gap-16 pb-16 [grid-area:section]">
	<article class="prose max-w-none prose-p:indent-6">
		<SvelteMarkdown source={contact}></SvelteMarkdown>
	</article>
	<PerfactiveLink></PerfactiveLink>
</section>
