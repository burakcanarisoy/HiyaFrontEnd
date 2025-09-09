import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'hiya-dark': '#2b2722',
        'hiya-brown': '#a68263',
        'hiya-terracotta': '#a65f46',
        'hiya-beige': '#d9b89c',
        'hiya-light-beige': '#F7F3EF',
      },
      fontFamily: {
        lato: ['var(--font-lato)', 'sans-serif'],
        butler: ['var(--font-butler)', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config