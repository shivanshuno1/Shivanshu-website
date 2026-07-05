/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#05060A',
        ink: '#0B0E16',
        panel: '#10141F',
        cyan: {
          DEFAULT: '#4FF3D0',
          soft: '#9FFCE8',
        },
        violet: {
          DEFAULT: '#8B7CF6',
          deep: '#4E3FBF',
        },
        ember: '#FF6B4A',
        mist: '#E8ECF4',
        haze: '#7C8598',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-fade': 'linear-gradient(to bottom, rgba(79,243,208,0.06) 1px, transparent 1px), linear-gradient(to right, rgba(79,243,208,0.06) 1px, transparent 1px)',
      },
      boxShadow: {
        glow: '0 0 40px rgba(79,243,208,0.25)',
        'glow-violet': '0 0 40px rgba(139,124,246,0.25)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
};
