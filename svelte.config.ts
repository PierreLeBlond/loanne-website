import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { type Config } from "@sveltejs/kit";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { resolve } from 'path';

const config: Config = {
  preprocess: [vitePreprocess(), mdsvex({ extensions: ['.svx', '.md'] })],
  kit: {
    adapter: adapter(),
    paths: {
      base: `/${process.env.PUBLIC_BASE_PATH}` || ""
    },
    alias: {
      $content: resolve('./src/content'),
      $components: resolve('./src/lib/components'),
    },
    prerender: {
      handleHttpError: 'ignore'
    }
  },
  extensions: ['.svelte', '.svx', '.md'],
}

export default config;
