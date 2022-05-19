import adapter from '@sveltejs/adapter-auto';
import path from 'path';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		methodOverride: {
			allowed: ['POST', 'PUT', 'PATCH', 'DELETE']
		},
		vite: {
			define: {
				'process.env': process.env
			},
			resolve: {
				alias: {
					'@components': path.resolve('./src/lib/components'),
					'@lib': path.resolve('./src/lib/*'),
					'@api': path.resolve('./src/api/*'),
					'@utils': path.resolve('./src/utils/*')
				}
			}
		}
	}
};

export default config;
