import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        black: 'var(--black)',
        white: 'var(--white)',
        'gray-text': 'var(--gray-text)',
        'gray-border': 'var(--gray-border)',
      },
      fontFamily: {
        tobias: 'var(--font-tobias)',
        'xanh-mono': 'var(--font-xanh-mono)',
        generalsans: 'var(--font-generalSans)',
      },
      fontSize: {
        display: '38px',
        title: '32px',
        fine: '15px',
      },
      boxShadow: {
        media: '0 5px 15px 0 rgba(0,0,0,.1)',
      },
    },
  },
  plugins: [],
}

export default config
