<script lang="ts">
	import SvelteMarkdown from '@humanspeak/svelte-markdown';
	import tcc from '$content/tcc.md?raw';
</script>

<section
	class="flex w-full flex-col items-center justify-center gap-16 pt-16 pb-16 [grid-area:section]"
>
	<article class="prose max-w-none prose-p:indent-6">
		<SvelteMarkdown source={tcc}></SvelteMarkdown>
	</article>
</section>
