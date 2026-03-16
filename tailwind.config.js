/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: '#2693D8',
        accent: '#2693D8',
        dark: '#0a0a0a',
        'bg-dark': '#0f0f0f',
        'bg-darker': '#0a0a0a',
        'card-dark': '#141414',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 24px -4px rgba(0, 0, 0, 0.08), 0 8px 16px -6px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 12px 48px -12px rgba(0, 0, 0, 0.12), 0 16px 32px -8px rgba(0, 0, 0, 0.06)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-delay-1': 'fadeIn 0.6s ease-out 0.1s forwards',
        'fade-in-delay-2': 'fadeIn 0.6s ease-out 0.2s forwards',
        'fade-in-delay-3': 'fadeIn 0.6s ease-out 0.35s forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
