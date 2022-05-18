module.exports = {
	content: ['./src/routes/**/*.{svelte,js,ts}'],
	purge: ['./src/**/*.html', './src/**/*.svelte'],
	theme: {
		extend: {}
	},
	plugins: [require('daisyui'), require('@tailwindcss/typography'), require('@tailwindcss/forms')],
	daisyui: {
		themes: ['light', 'dark']
	}
};
