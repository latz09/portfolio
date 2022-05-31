module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				Montserrat: ['Montserrat', 'sans-serif'],
			},
			colors: {
				myblue: {
					300: '#33A2C1',
					200: '#96CBDA',
					100: '#CBE7ED',
					50: '#E2EFF2',
				},
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		 require('@tailwindcss/forms'),
	],
};
