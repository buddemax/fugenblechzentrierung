/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        paper: 'oklch(98.4% 0.004 230)',
        ink: {
          DEFAULT: 'oklch(18% 0.015 240)',
          soft: 'oklch(32% 0.012 240)',
          mute: 'oklch(52% 0.010 235)',
          faint: 'oklch(74% 0.007 230)',
          line: 'oklch(88% 0.006 230)',
          'line-strong': 'oklch(78% 0.008 230)',
        },
        blue: {
          DEFAULT: '#1182C2',
          soft: 'oklch(62% 0.13 238)',
          deep: 'oklch(42% 0.13 238)',
          bg: 'oklch(96% 0.025 238)',
        },
        green: {
          DEFAULT: '#328E51',
          deep: 'oklch(45% 0.12 150)',
        },
      },
      fontFamily: {
        display: ['"Clash Display"', 'system-ui', 'sans-serif'],
        sans: ['Satoshi', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 6.2vw, 6rem)', { lineHeight: '0.94', letterSpacing: '-0.032em' }],
        'display-lg': ['clamp(2.5rem, 5.5vw, 4.75rem)', { lineHeight: '0.98', letterSpacing: '-0.028em' }],
        'display-md': ['clamp(2rem, 3.6vw, 3.25rem)', { lineHeight: '1.02', letterSpacing: '-0.022em' }],
        'display-sm': ['clamp(1.5rem, 2.4vw, 2.25rem)', { lineHeight: '1.1', letterSpacing: '-0.015em' }],
        'mega-num': ['clamp(5rem, 12vw, 11rem)', { lineHeight: '0.82', letterSpacing: '-0.055em' }],
      },
      letterSpacing: {
        label: '0.12em',
      },
      maxWidth: {
        prose: '62ch',
        measure: '38ch',
      },
      spacing: {
        'gutter': 'clamp(1.25rem, 4vw, 2.5rem)',
        'section-y': 'clamp(5rem, 10vw, 9rem)',
      },
    },
  },
  plugins: [],
};
