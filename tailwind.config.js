/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ikada: {
          bg: '#0c0d12',
          surface: '#13151c',
          panel: '#1a1d26',
          border: '#282c39',
          volt: '#e2f952',
          amber: '#ff5722',
          cyan: '#00e5ff',
          muted: '#8e95a5',
          // Light Mode Specifics
          'light-bg': '#f4f3ed',
          'light-surface': '#ffffff',
          'light-panel': '#ebe9df',
          'light-border': '#d2cfbe',
          'light-text': '#111215',
          'light-muted': '#5c5f6e'
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'brutal-volt': '4px 4px 0px 0px #e2f952',
        'brutal-white': '4px 4px 0px 0px #ffffff',
        'brutal-black': '4px 4px 0px 0px #111215',
        'brutal-amber': '4px 4px 0px 0px #ff5722',
        'brutal-card': '6px 6px 0px 0px #13151c',
      }
    },
  },
  plugins: [],
}
