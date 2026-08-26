/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#09090b',
        surface: '#111113',
        accent: '#84b6ff',
        muted: '#a1a1aa',
      },
      maxWidth: {
        content: '72rem',
      },
      fontSize: {
        h1: ['clamp(2.25rem, 5vw, 3.75rem)', { lineHeight: '1.1', fontWeight: '700', letterSpacing: '-0.03em' }],
        h2: ['clamp(1.5rem, 3vw, 2rem)', { lineHeight: '1.2', fontWeight: '600', letterSpacing: '-0.02em' }],
        h3: ['1.125rem', { lineHeight: '1.4', fontWeight: '600' }],
        caption: ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.08em' }],
      },
    },
  },
  plugins: [],
};
