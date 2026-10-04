<script lang="ts">
	import SvelteMarkdown from '@humanspeak/svelte-markdown';
	import Article from '$components/article.svelte';
	import tcc from '$content/tcc.md?raw';
</script>

<section
	class="flex w-full flex-col items-center justify-center gap-16 pt-16 pb-16 [grid-area:section]"
>
	<Article>
		<SvelteMarkdown source={tcc}></SvelteMarkdown>
	</Article>
</section>
