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
      screens: {
        'two-col': '1300px',
        content: { max: '1000px' },
        tablet: { max: '900px' },
        narrow: { max: '800px' },
        wide: { max: '1200px' },
        compact: { max: '700px' },
        phone: { max: '550px' },
      },
    },
  },
  plugins: [],
}

export default config
