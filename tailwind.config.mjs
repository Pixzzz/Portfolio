/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {

			colors: {
				'custom-green': '#212922',
				'custom-black': '#1c1c1c',
				'custom-Light-Green': '#5b8266'
			},
			height: {
				'640': '50rem',
				'635': '45rem',
				'new': '25rem'
			},
			left: {
				'1.7k': '110rem'
			},
			keyframes: {
				typing: {
					'0%': { width: '0%' },
					'100%': { width: '100%' },
				},
				blink: {
					'50%': { borderColor: 'transparent' },
				},
			},
			animation: {
				typing: 'typing 3s steps(30, end) forwards, blink 0.75s step-end infinite',
				type: 'typing2 3s steps(30, end) forwards, blink 0.75s step-end infinite',
			},
		},
	},
	plugins: [],
})
