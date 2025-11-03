// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://danlang422.github.io/fullstack-dev-bootcamp-notes/',
	integrations: [
		starlight({
			title: 'Notes on Astro',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{ label: 'HTML', autogenerate: { directory: 'html' } },
				{ label: 'CSS', autogenerate: { directory: 'css' } },
				{ label: 'JavaScript', autogenerate: { directory: 'javascript' } },
			  ]
			  
		}),
	],
});
