import localFont from 'next/font/local'

export const vcrOsdMono = localFont({
  src: '../../public/fonts/VCR_OSD_Mono.woff2',
  display: 'swap',
  variable: '--font-vcr',
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