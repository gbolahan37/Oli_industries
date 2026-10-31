/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#F8F2E9',
        choc: '#422719',
        cognac: '#986442',
        beige: '#E6D7C6',
        charcoal: '#24201D',
        line: 'rgba(66,39,25,.18)',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        script: ['"Mrs Saint Delafield"', '"Brush Script MT"', 'cursive'],
      },
      keyframes: { pop: { '50%': { transform: 'scale(1.5)' } } },
      animation: { pop: 'pop .3s ease' },
    },
  },
  plugins: [],
}
