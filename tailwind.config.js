/** @type {import('tailwindcss').Config} */
import autoprefixer from 'autoprefixer';
import * as tailwindcss from 'tailwindcss'
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'satisfy': ['Satisfy', 'cursive'],
      },
    },
  },
  plugins: [tailwindcss, autoprefixer]

};
