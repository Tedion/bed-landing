/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        display: ['Playfair Display', 'serif'],
        mono: ['SF Mono', 'Monaco', 'Inconsolata', 'monospace'],
      },
      colors: {
        primary: {
          sage: '#2B3210',
          cream: '#FBF8EF',
          terracotta: '#DE6E27',
          forest: '#E5E2D9',
          tan: '#505631',
          copper: '#BB8853',
        },
        neutral: {
          white: '#FFFFFF',
          gray: {
            50: '#FAFAFA',
            100: '#F5F5F5',
            900: '#393939',
          },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
