let sizes = {};
for (let index = 1; index <= 100; index++) {
	sizes[index * 4 + 'px'] = index * 4 + 'px';
}
let minSize = {
	'0': '0',
	'1/4': '25%',
	'1/2': '50%',
	'3/4': '75%',
	full: '100%',
};
const colors = require('tailwindcss/colors')


module.exports = {
	purge: ['./resources/**/*.html', './resources/**/*.vue', './resources/**/*.js', './resources/**/*.ts', './resources/**/*.tsx', './resources/**/*.css'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
		'primary': {//navy-blue
					'50': '#f2f3f9',
					'100': '#e6e6f3',
					'200': '#c0c1e1',
					'300': '#9a9ccf',
					'400': '#4e52ab',
					'500': '#020887',
					'600': '#02077a',
					'700': '#020665',
					'800': '#010551',
					'900': '#010442',
				},
			/*	secondary: {//emarald
					'50': '#f4fdf8',
					'100': '#e9faf0',
					'200': '#c8f3da',
					'300': '#a7ebc4',
					'400': '#65dd97',
					'500': '#23ce6b',
					'600': '#20b960',
					'700': '#1a9b50',
					'800': '#157c40',
					'900': '#116534',
				}*/
                'secondary': {//yellow
                    '50': '#fffcf3',
                    '100': '#fffae8',
                    '200': '#fff2c4',
                    '300': '#ffe9a1',
                    '400': '#ffd95b',
                    '500': '#ffc914',
                    '600': '#e6b512',
                    '700': '#bf970f',
                    '800': '#99790c',
                    '900': '#7d620a'
                },
                // 'primary': colors.indigo,
				black: {
					100: '#cdd0d6',
					200: '#9ba2ae',
					300: '#687385',
					400: '#36455d',
					500: '#041634',
					600: '#03122a',
					700: '#020d1f',
					800: '#020915',
					900: '#01040a',
				},
			},
			height: sizes,
			width: sizes,
			minWidth: minSize,
			minHeight: minSize,
			screens: { xs: '320px' },
			transitionProperty: {
				width: 'width',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/aspect-ratio'),require('@tailwindcss/forms'),],
};
