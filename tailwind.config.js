/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'class',
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'Ubuntu': ['Ubuntu', 'sans-serif']
      },
      colors: {
      'celesteClaro': '#10f0fc',
      'celesteOscuro': '#10637D',
      'negro': '#1c2025',
      'negro-claro': '#27282f',
      'gris': '#b3c3d7',
      'beige': '#f2f2f2',
      },
      textColor: ['active','hover','focus', 'group-hover'],

      backgroundImage: {
        "close-menu": "url('src/assets/close.svg')",
        "open-menu": "url('src/assets/open.svg')"
      }
    },
  },
  plugins: [],
}