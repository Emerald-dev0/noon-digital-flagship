/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#07060b',
          900: '#0a0810',
          850: '#0e0b16',
          800: '#130f1e',
          700: '#1a1526',
          600: '#241d33',
        },
        violet: {
          50: '#f2ecff',
          200: '#d6c6ff',
          300: '#bda2ff',
          400: '#a279ff',
          500: '#8b5cf6',
          600: '#7338e8',
          700: '#5b23c4',
          900: '#2d1065',
        },
        ember: {
          300: '#ffc98a',
          400: '#ffa552',
          500: '#ff8a3d',
          600: '#f06a1f',
        },
        // Landing page — Noon brand palette (from Muba Brand Details doc)
        brand: {
          50: '#f6f1ff',
          100: '#ede4ff',
          200: '#dac7ff',
          300: '#c2a3ff',
          400: '#a67dff',
          500: '#8f56ff',
          600: '#7a3eee',
          700: '#642ed2',
        },
        blush: {
          400: '#ff8fd0',
          500: '#ff69c5',
        },
        navy: {
          900: '#0a1530',
          950: '#060d26',
        },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        archivo: ['Archivo', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serifit: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      maxWidth: {
        shell: '1240px',
      },
      boxShadow: {
        glow: '0 0 60px -12px rgba(139,92,246,0.55)',
        'glow-sm': '0 0 28px -8px rgba(139,92,246,0.45)',
        ember: '0 0 50px -14px rgba(255,138,61,0.6)',
        lift: '0 30px 80px -40px rgba(0,0,0,0.95)',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        drift: {
          '0%,100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '50%': { transform: 'translate3d(0,-18px,0) scale(1.04)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        marquee: 'marquee var(--marquee-duration,38s) linear infinite',
        drift: 'drift 12s ease-in-out infinite',
        shimmer: 'shimmer 6s linear infinite',
      },
    },
  },
  plugins: [],
}
