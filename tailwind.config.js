/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        memo: {
          DEFAULT: 'var(--text)',
          heading: 'var(--text-h)',
          bg: 'var(--bg)',
          border: 'var(--border)',
          code: 'var(--code-bg)',
          accent: 'var(--accent)',
          'accent-bg': 'var(--accent-bg)',
          'accent-border': 'var(--accent-border)',
          'social-bg': 'var(--social-bg)',
        }
      },
      fontFamily: {
        sans: ['var(--sans)'],
        heading: ['var(--heading)'],
        mono: ['var(--mono)'],
      }
    },
  },
  plugins: [],
}