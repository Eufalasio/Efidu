/** @type {import('tailwindcss').Config} */
module.exports = {
	// NOTE: Update this to include the paths to all of your component files.
	content: [
		'./app/**/**/**/*.{js,jsx,tsx,jsx}',
		'./components/**/*.{js,jsx,tsx,jsx}',
	],
	presets: [require('nativewind/preset')],
	theme: {
		extend: {
			colors: require('./theme/colors'),
		},
	},
	plugins: ['prettier-plugin-tailwindcss'],
};
