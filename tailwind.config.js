/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          'core': '#8f56ff', // Purple
          '500': '#8f56ff',
          '600': '#8f56ff',
        },
        'accent': {
          'pink': '#ff69c5', // Pink
        },
        'surface': {
          'base': '#000000', // Black
          'white': '#ffffff', // White
          'card': '#0a0a0a',
          'elevated': '#111111',
          'muted': '#1a1a1a',
          'subtle': '#222222',
          'border': '#2a2a2a',
          'border-light': '#3a3a3a',
        },
        'success': '#059669',
        'warning': '#D97706',
        'error': '#DC2626',
        'text': {
          'primary': '#ffffff',
          'secondary': 'rgba(255,255,255,0.85)',
          'tertiary': 'rgba(255,255,255,0.65)',
          'muted': 'rgba(255,255,255,0.45)',
          'on-dark': '#ffffff',
          'on-dark-secondary': 'rgba(255,255,255,0.85)',
          'on-dark-muted': 'rgba(255,255,255,0.5)',
        },
      },
      fontFamily: {
        'display': ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        'body': ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        'accent': ['"Playfair Display"', 'serif'],
        'mono': ['"SF Mono"', '"Fira Code"', '"Cascadia Code"', 'monospace'],
      },
      fontSize: {
        'display-2xl': ['72px', { lineHeight: '0.95', letterSpacing: '-0.04em', fontWeight: '900' }],
        'display-xl': ['60px', { lineHeight: '1.0', letterSpacing: '-0.035em', fontWeight: '800' }],
        'display-lg': ['48px', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '700' }],
        'display-md': ['32px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-sm': ['24px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        'body-xl': ['18px', { lineHeight: '1.6' }],
        'body-lg': ['16px', { lineHeight: '1.6' }],
        'body-md': ['14px', { lineHeight: '1.6' }],
        'body-sm': ['12px', { lineHeight: '1.5' }],
        'label': ['11px', { lineHeight: '1.4', letterSpacing: '0.08em', fontWeight: '500' }],
      },
      spacing: {
        'section': '120px',
        'section-lg': '160px',
      },
      borderRadius: {
        'xs': '4px',
        'sm': '6px',
        'md': '10px',
        'lg': '16px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '32px',
        '4xl': '40px',
        'pill': '9999px',
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(143, 86, 255, 0.08)',
        'card': '0 4px 24px rgba(143, 86, 255, 0.1)',
        'elevated': '0 12px 40px rgba(143, 86, 255, 0.15)',
        'floating': '0 24px 64px rgba(143, 86, 255, 0.2)',
        'glow': '0 0 40px rgba(143, 86, 255, 0.3)',
        'glow-pink': '0 0 32px rgba(255, 105, 197, 0.25)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(143, 86, 255, 0.2)' },
          '50%': { boxShadow: '0 0 50px rgba(143, 86, 255, 0.4)' },
        },
      },
    },
  },
  plugins: [],
}
