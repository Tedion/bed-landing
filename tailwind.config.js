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
        brand: {
          // Exact brand colors from style guide
          sage: '#2B3210',        // Muted forest green
          cream: '#FBF8EF',       // Very light peachy cream
          terracotta: '#DE6E27',  // Warm terracotta orange
          beige: '#E5E2D9',       // Light beige/off-white
          olive: '#505631',       // Warm sandy brown/olive green
          // Refined color variations for better duo
          terracottaLight: '#E87A35',
          terracottaDark: '#C85D20',
          sageLight: '#3A4220',
          sageDark: '#1A1F0A',
        },
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
            200: '#E5E5E5',
            300: '#D4D4D4',
            400: '#A3A3A3',
            500: '#737373',
            600: '#525252',
            700: '#404040',
            800: '#262626',
            900: '#171717',
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
