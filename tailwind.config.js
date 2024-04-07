/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Playpen-Sans': ['Playpen Sans','sans-serif'], 
    },
    extend: {
      fontSize: {
        main: ['1.5em', { lineHeight: '2em' }],
        h1_xl: ['4em', { lineHeight: '145%', fontWeight: '600' }],
        h1: ['3em', { lineHeight: '145%', fontWeight: '600' }],
        h2: ['2.25em', { lineHeight: '150%', fontWeight: '600' }],
        h3: ['2em', { lineHeight: '150%', fontWeight: '600' }],
        h4: ['1.5em', { lineHeight: '150%', fontWeight: '600' }],
        h5: ['1.125em', { lineHeight: '150%', letterSpacing: '-0.5px', fontWeight: '600' }],
        h6: ['1em', { lineHeight: '150%', fontWeight: '600' }],
        p24: ['1.5em', { lineHeight: '150%', fontWeight: '400' }],
        p20: ['1.25em', { lineHeight: '150%', fontWeight: '400' }],
        p16: ['1em', { lineHeight: '150%', fontWeight: '400' }],
        p14: ['0.875em', { lineHeight: '150%', fontWeight: '400' }],
        p12: ['0.75em', { lineHeight: '150%', fontWeight: '400' }],
        label1: ['1em', { lineHeight: '145%', fontWeight: '600' }],
        label2: ['0.875em', { lineHeight: '145%', fontWeight: '600' }],
        label3: ['0.75em', { lineHeight: '145%', fontWeight: '600' }],
      },
      colors:{
        grey: '#F5F5F5',
        green: '#43865B',
        yellow: '#FFB02A',
        red: '#FF7D64',
        pink: '#F3DFBD',
        blue:'#0F192'

      }
    },
  },
  plugins: [],
}

