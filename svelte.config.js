import adapter from '@sveltejs/adapter-auto';
import path from 'path';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		vite: {
			define: {
				'process.env': process.env
			},
			resolve: {
				alias: {
					'@components': path.resolve('./src/lib/components'),
					'@lib': path.resolve('./src/lib/*')
				}
			}
		}
	}
};

export default config;
