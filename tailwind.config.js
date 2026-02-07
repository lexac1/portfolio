/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'dark': {
          'bg': '#0f0f0f',
          'card': '#1a1a1a',
          'border': '#262626',
          'text': '#e0e0e0',
          'subtle': '#999999',
          'accent': '#3b82f6',
        }
      }
    }
  },
  plugins: []
}
