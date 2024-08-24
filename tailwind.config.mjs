/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			'sm': '640px',
			'md': '768px',
			'lg': '980px',
			'xl': '1260px',
			'2xl': '1536px'		
		},
		colors: {
			primary: '#262E32',
			secondary: '#FC2791',
			white: '#FFFFFF',
			silver: '#BEBEBE',
			alabaster: '#F8F8F8',
			codGray: '#1D1D1D',
			riverBed: '#495861'
		},
		extend: {
			fontFamily: {
				raleway: ['Raleway', 'sans-serif',...defaultTheme.fontFamily.sans]
			},
		},
	},
	plugins: [],
}
