/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          purple: '#9333ea',
          pink: '#ec4899',
          blue: '#3b82f6',
          cyan: '#06b6d4',
        }
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'hero-gradient': 'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.9))',
      }
    },
  },
  plugins: [],
}
