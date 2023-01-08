/* @type {import('tailwindcss').Config} */

module.exports = {
	darkMode: 'class',
	important: true,
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: { bajaGreen: '#bbd700' },
			backgroundImage: {
				'hero-pattern': "url('/hero-pattern.svg')",
				'hero-pattern-dark': "url('/hero-pattern-dark.svg')",
			},
		},
	},
	plugins: [],
};
