/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        // Brand accent (the electric blue from the mockup)
        brand: {
          DEFAULT: '#1E9EFF',
          50: '#EAF6FF',
          100: '#D3ECFF',
          200: '#A7D9FF',
          300: '#7AC5FF',
          400: '#4DB4FF',
          500: '#1E9EFF',
          600: '#0A84E0',
          700: '#0866B0',
          800: '#064E86',
          900: '#04365E',
        },
        // Dark UI surfaces, darkest -> lightest
        ink: {
          DEFAULT: '#05070A', // page background (near-black)
          900: '#05070A',
          800: '#0A0E14',
          700: '#0E141C',
          600: '#121A24', // card / panel
          500: '#18222E', // elevated card
          400: '#1E2A38', // hairline borders
          300: '#2A3947',
        },
        // Text tones
        fg: {
          DEFAULT: '#FFFFFF',
          muted: '#9AA7B5',
          subtle: '#6B7785',
        },
      },
      fontFamily: {
        // Headings: heavy, slightly technical grotesque
        display: ['Archivo', 'Oswald', 'Inter', 'system-ui', 'sans-serif'],
        // Body / UI
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      maxWidth: {
        content: '1600px', // standard page content width
      },
      borderRadius: {
        card: '14px',
      },
      boxShadow: {
        card: '0 8px 30px rgba(0, 0, 0, 0.45)',
        glow: '0 0 0 1px rgba(30, 158, 255, 0.35), 0 0 24px rgba(30, 158, 255, 0.25)',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          lg: '2rem',
        },
        screens: {
          '2xl': '1600px',
        },
      },
    },
  },
  plugins: [],
};
