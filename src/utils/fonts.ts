import localFont from 'next/font/local'

export const xanhMono = localFont({
  src: [
    {
      path: '../../public/fonts/XanhMono-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/XanhMono-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--font-xanh-mono',
});

export const generalSans = localFont({
  src: '../../public/fonts/GeneralSans-Variable.woff2',
  display: 'swap',
  variable: '--font-generalSans',
});

export const tobias = localFont({
  src: [
    {
      path: '../../public/fonts/Tobias_Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Tobias_Regular.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Tobias_SemiBold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-tobias',
});