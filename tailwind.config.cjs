module.exports = {
	content: ['./src/routes/**/*.{svelte,js,ts}'],
	purge: ['./src/**/*.html', './src/**/*.svelte'],
	theme: {
		extend: {}
	},
	plugins: [require('daisyui'), require('@tailwindcss/typography'), require('@tailwindcss/forms')],
	daisyui: {
		themes: [
			{
				payload: {
					primary: '#003049',
					'primary-content': '#ffffff',
					secondary: '#780000',
					'secondary-content': '#ffffff',
					accent: '#37CDBE',
					neutral: '#003049',
					'base-100': '#FFFFFF',
					info: '#1B998B',
					success: '#36D399',
					warning: '#FBBD23',
					error: '#C1121F'
				}
			}
		]
	}
};
