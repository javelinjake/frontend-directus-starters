import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import tailwindcss from '@tailwindcss/vite'; // Added

export default defineConfig({
	plugins: [enhancedImages(), sveltekit(), tailwindcss()]
});
