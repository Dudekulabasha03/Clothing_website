/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light mode (Snitch/Souled Store style)
        background: '#FFFFFF',
        surface: {
          1: '#F9F9F9',
          2: '#F2F2F2',
          3: '#EBEBEB',
          border: '#E5E5E5'
        },
        // Dark mode surfaces
        dark: {
          bg: '#0a0a0a',
          surface1: '#121212',
          surface2: '#181818',
          surface3: '#222222',
          border: '#2a2a2a'
        },
        brand: {
          amber: '#F5B301',
          lime: '#D1FE17',
          red: '#E53E3E',
          teal: '#00F0FF',
          black: '#111111',
          white: '#FFFFFF'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Cabinet Grotesk', 'Syne', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      animation: {
        'marquee': 'marquee 28s linear infinite',
        'marquee-reverse': 'marqueeReverse 28s linear infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'slide-up': 'slideUp 0.5s ease-out both',
        'fade-in': 'fadeIn 0.4s ease-out both',
        'scale-in': 'scaleIn 0.3s ease-out both'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' }
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.92)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        }
      },
      boxShadow: {
        'card': '0 2px 12px rgba(0,0,0,0.08)',
        'card-hover': '0 8px 32px rgba(0,0,0,0.14)',
        'amber-glow': '0 0 24px rgba(245,179,1,0.35)',
        'amber-glow-sm': '0 0 12px rgba(245,179,1,0.25)'
      }
    },
  },
  plugins: [],
}
